
. $PSScriptRoot/.connect.ps1
Write-Output "Starting download"
Get-ExoRecipient -ResultSize unlimited
#| select Id,ExchangeObjectId,Guid,Alias,RecipientTypeDetails,EmailAddresses,DisplayName,DistinguishedName 
| convertto-json  
| Out-File -Encoding utf8NoBOM -FilePath "$($ENV:DATAOUT)/recipents.json"
Write-Output "Completed download"