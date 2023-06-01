
$EXCHAPPID = $env:EXCHAPPID
$EXCHORGANIZATION = $env:EXCHORGANIZATION
$EXCHCERTIFICATEPATH = "$PSScriptRoot/cert.pfx"

Write-Host "Connecting to $EXCHORGANIZATION"

Connect-ExchangeOnline -CertificateFilePath $EXCHCERTIFICATEPATH  -AppID $EXCHAPPID -Organization $EXCHORGANIZATION # -ShowBanner:$false #   -BypassMailboxAnchoring:$true

Get-Mailbox -ResultSize unlimited