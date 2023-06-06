
. $PSScriptRoot/.connect.ps1

$rooms = Get-Mailbox -RecipientTypeDetails RoomMailbox -ResultSize Unlimited
foreach ($room in $rooms) {
  Write-Host "Getting rooms places" $mailbox.DisplayName
  Get-Place -Identity $room.Identity
 | convertto-json -Depth 4
 | Out-File -Encoding utf8NoBOM "$($ENV:DATAOUT)/roomplace$($room.Id).json"
 
}


