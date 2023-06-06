
. $PSScriptRoot/.connect.ps1

$mailboxes = Get-Mailbox -RecipientTypeDetails SharedMailbox -ResultSize Unlimited
foreach ($mailbox in $mailboxes) {
  Write-Host "Getting members" $mailbox.DisplayName
  Get-MailboxPermission -Identity $mailbox.Identity
  | Where-Object {($_.user -like '*@*')}
  | select Identity,User,AccessRights
  | convertto-json
  | Out-File -Encoding utf8NoBOM "$($ENV:DATAOUT)/sharedmailboxpermissions-$($mailbox.Id).json"
 
}


