
. $PSScriptRoot/.connect.ps1

$groups = Get-DistributionGroup  -ResultSize Unlimited
foreach ($group in $groups) {
  Write-Host "Getting members" $group.DisplayName
  Get-DistributionGroupMember -Identity $group.Id
  | select Identity,PrimarySmtpAddress
  | convertto-json
  | Out-File -Encoding utf8NoBOM "$($ENV:DATAOUT)/distributiongroupmembers-$($group.Id).json"
 
}


