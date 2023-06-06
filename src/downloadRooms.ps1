
. $PSScriptRoot/.connect.ps1

Get-Mailbox -RecipientTypeDetails RoomMailbox -ResultSize Unlimited
| select Identity,PrimarySmtpAddress,DisplayName, ResourceCapacity
| convertto-json
| Out-File -Encoding utf8NoBOM "$($ENV:DATAOUT)/rooms.json"




