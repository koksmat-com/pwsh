
. $PSScriptRoot/.connect.ps1
Write-Output "Connected, starting to read statictics for all Shared Mailboxes"
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
$x = 0
$i = 0
$total = $mailboxes.Count

foreach ($mailbox in $mailboxes) {
  $i++
  $x++
  Write-Output "$i of $total - $($mailbox.DisplayName)"
  if ($x -gt 99) {
    Write-Output "Reconnecting after 100 iterations *********************************"
    Disconnect-ExchangeOnline -Confirm:$false
    . $PSScriptRoot/.connect.ps1
    $x = 0
  }

  $filePath1 = "$($ENV:DATAOUT)/sharedmailboxpermissions-$($mailbox.ExchangeObjectId).json"

  $stats = Get-MailboxFolderStatistics -Identity $mailbox.PrimarySmtpAddress -IncludeOldestAndNewestItems | Where-Object { $_.Name -eq 'Inbox' -or $_.Name -eq 'Sent Items' } | Select Name, OldestItemReceivedDate, NewestItemReceivedDate

  ForEach ($stat in $stats) {

    If ($stat.Name -eq "Inbox") {

      $Inbox = $stat

    }

    If ($stat.Name -eq "Sent Items") {

      $Sent = $stat

    }

  }

  $allStatistics = New-Object PSObject -property @{
    WhenCreated  = $mailbox.WhenCreated
    LastReceived = $Inbox.NewestItemReceivedDate
    LastSent     = $Sent.NewestItemReceivedDate
  }


   
  $filePath2 = "$($ENV:DATAOUT)/sharedmailboxStatictics-$($mailbox.ExchangeObjectId).json"
  if (![System.IO.File]::Exists($filePath2)) {
    
    convertto-json -InputObject $allStatistics
    | Out-File -Encoding utf8NoBOM -FilePath $filePath2
  }
   
}
Write-Output "Done"
convertto-json -InputObject $mailboxes
| Out-File -Encoding utf8NoBOM "$($ENV:DATAOUT)/sharedmailboxes.json"

