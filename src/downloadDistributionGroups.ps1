
. $PSScriptRoot/.connect.ps1

Get-DistributionGroup -ResultSize unlimited 
| select Id,ExchangeObjectId,Guid,ManagedBy,GroupType,SamAccountName,Description,Alias, `
  DisplayName,EmailAddresses,HiddenFromAddressListsEnabled,PrimarySmtpAddress, `
  RecipientType,RecipientTypeDetails,MailTip,MailTipTranslations,Name,DistinguishedName 
| convertto-json
| Out-File -Encoding utf8NoBOM "$($ENV:DATAOUT)/distributiongroups.json"