
. $PSScriptRoot/.connect.ps1

$filePath0 = "$($ENV:DATAOUT)/sharedmailboxes.temp.json"
if (![System.IO.File]::Exists($filePath0)) {
  $mailboxes = Get-Mailbox -RecipientTypeDetails SharedMailbox -ResultSize Unlimited
| select Identity, ExchangeObjectId, PrimarySmtpAddress, DisplayName, CustomAttribute1


  ConvertTo-Json -InputObject $mailboxes
  | Out-File -Encoding utf8NoBOM  -FilePath $filePath0
}
else {
  Write-Output "Resuming" 
  $mailboxes = Get-Content  $filePath0  | Out-String | ConvertFrom-Json

}
$x  = 0
$i  = 0
$total = $mailboxes.Count

foreach ($mailbox in $mailboxes) {
  $i++
  $x++
  Write-Output "$i of $total Getting members" $mailbox.DisplayName
  if ($x -gt 100) {
    Write-Output "Reconnecting after 100 iterations *********************************"
    Disconnect-ExchangeOnline -Confirm:$false
    . $PSScriptRoot/.connect.ps1
    $x = 0
  }

  $filePath1 = "$($ENV:DATAOUT)/sharedmailboxpermissions-$($mailbox.ExchangeObjectId).json"

  if (![System.IO.File]::Exists($filePath1)) {
    Get-MailboxPermission -Identity $mailbox.ExchangeObjectId
    | Where-Object { ($_.user -like '*@*') }
    | select Identity, User, AccessRights
    | convertto-json
    | Out-File -Encoding utf8NoBOM -FilePath $filePath1
  }
   
  $filePath2 = "$($ENV:DATAOUT)/sharedmailboxrecipientPermission-$($mailbox.ExchangeObjectId).json"
  if (![System.IO.File]::Exists($filePath2)) {
    Get-RecipientPermission -Identity $mailbox.Identity
    | Where-Object { ($_.Trustee -like '*@*') }
    | select Identity, Trustee, AccessControlType, AccessRights
    | convertto-json
    | Out-File -Encoding utf8NoBOM -FilePath $filePath2
  }
   
}
Write-Output "Done"
convertto-json -InputObject $mailboxes
| Out-File -Encoding utf8NoBOM "$($ENV:DATAOUT)/sharedmailboxes.json"