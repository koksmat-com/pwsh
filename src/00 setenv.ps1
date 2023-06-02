
$loop = $true
$path = $PSScriptRoot
$debug = $true
do {
    $filename = "$path/.env"
    if ($debug) {
        write-output "Checking $filename"
    }
    if (Test-Path $filename) {
        if ($debug) {
            write-host -ForegroundColor Yellow "Using $filename" 
        }
        $lines = Get-Content $filename
            
        foreach ($line in $lines) {
                
            $nameValuePair = $line.split("=")
            if ($nameValuePair[0] -ne "") {
                # if ($debug) {
                #     write-host "Setting >$($nameValuePair[0])<"
                # }
                $value = $nameValuePair[1]
                
                for ($i = 2; $i -lt $nameValuePair.Count; $i++) {
                    $value += "="
                    $value += $nameValuePair[$i]
                }

                # if ($debug) {
                #     write-host "To >$value<"
                # }    
                [System.Environment]::SetEnvironmentVariable($nameValuePair[0], $value)
            }
        }

        $loop = $false
    }
    else {
        $lastBackslash = $path.LastIndexOf("/")
        if ($lastBackslash -lt 4) {
            $loop = $false
            if ($debug) {
                write-output "Didn't find any .env file  "
            }
        }
        else {
            $path = $path.Substring(0, $lastBackslash)
        }
    }

} while ($loop)


