. $PSScriptRoot/.connect.ps1
Get-Mailbox -ResultSize unlimited | ConvertTo-Json | Out-File "$ENV:DATAOUT/mailboxes.json"