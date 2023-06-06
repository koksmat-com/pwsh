
. $PSScriptRoot/.connect.ps1

$rooms = Get-Mailbox -RecipientTypeDetails RoomMailbox -ResultSize Unlimited
foreach ($room in $rooms) {
  Write-Host "Getting rooms permissions" $mailbox.DisplayName
  Get-CalendarProcessing -Identity $room.Identity
 | convertto-json -Depth 4
 | Out-File -Encoding utf8NoBOM "$($ENV:DATAOUT)/roomcalendarprocessing$($room.Id).json"
 
}


