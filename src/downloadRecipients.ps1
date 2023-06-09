
. $PSScriptRoot/.connect.ps1
Write-Output "Starting download"
$recipients = Get-ExoRecipient -ResultSize unlimited
#| select Id,ExchangeObjectId,Guid,Alias,RecipientTypeDetails,EmailAddresses,DisplayName,DistinguishedName 
convertto-json -inputobject $recipients
| Out-File -Encoding utf8NoBOM -FilePath "$($ENV:DATAOUT)/recipents.json"
Write-Output "Completed download"