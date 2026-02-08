$files = Get-ChildItem ".\assets\Screenshot *.png" | Sort-Object Name
$count = 1
foreach ($file in $files) {
    $newName = "scare_$count.png"
    $newPath = Join-Path $file.DirectoryName $newName
    Rename-Item -Path $file.FullName -NewName $newName
    Write-Host "Renamed $($file.Name) to $newName"
    $count++
}
