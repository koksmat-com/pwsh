$EXCHAPPID = $env:EXCHAPPID
$EXCHORGANIZATION = $env:EXCHORGANIZATION
$EXCHCERTIFICATEPATH = "$PSScriptRoot/certificate.pfx"
$bytes = [Convert]::FromBase64String($ENV:EXCHCERTIFICATE)
[IO.File]::WriteAllBytes($EXCHCERTIFICATEPATH, $bytes)

Connect-ExchangeOnline -CertificateFilePath $EXCHCERTIFICATEPATH  -AppID $EXCHAPPID -Organization $EXCHORGANIZATION -ShowBanner:$false #   -BypassMailboxAnchoring:$true
