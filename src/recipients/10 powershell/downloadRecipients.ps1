
. $PSScriptRoot/../../.connect.ps1

Get-Recipient -ResultSize Unlimited  
| select Id,Guid,Alias,RecipientTypeDetails,EmailAddresses,DisplayName,DistinguishedName 
| convertto-json  
| Out-File -Encoding utf8NoBOM "$ENV:DATAOUT/recipents.json"