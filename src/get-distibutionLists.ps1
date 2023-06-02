. $PSScriptRoot/.connect.ps1
Get-DistributionGroup -ResultSize Unlimited | select Guid, DisplayName, ManagedBy, IsDirSynced, PrimarySmtpAddress | ConvertTo-Json | Out-File  "$ENV:DATAOUT/distributiongroups.json"
