
. $PSScriptRoot/.connect.ps1

Get-Mailbox -RecipientTypeDetails SharedMailbox -ResultSize Unlimited
| select Identity,PrimarySmtpAddress,DisplayName
| convertto-json
| Out-File -Encoding utf8NoBOM "$($ENV:DATAOUT)/sharedmailboxes.json"




