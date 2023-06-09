
. $PSScriptRoot/.connect.ps1
Write-Output "Reading Rooms"
$rooms = Get-Mailbox -RecipientTypeDetails RoomMailbox -ResultSize Unlimited
| select Identity,ExchangeObjectId,PrimarySmtpAddress,DisplayName, ResourceCapacity

foreach ($room in $rooms) {
    Write-Output "Getting rooms permissions" $mailbox.DisplayName
    Get-CalendarProcessing -Identity $room.Identity
   | convertto-json -Depth 4
   | Out-File -Encoding utf8NoBOM "$($ENV:DATAOUT)/roomcalendarprocessing-$($room.ExchangeObjectId).json"
   
   Write-Output "Getting rooms places" $mailbox.DisplayName
   Get-Place -Identity $room.Identity
  | convertto-json -Depth 4
  | Out-File -Encoding utf8NoBOM "$($ENV:DATAOUT)/roomplace-$($room.ExchangeObjectId).json"
  
  }
convertto-json -inputobject $rooms
| Out-File -Encoding utf8NoBOM "$($ENV:DATAOUT)/rooms.json"




