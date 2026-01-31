# Copy Store Icons Script
$source = "C:\Users\Abdulaziz\.gemini\antigravity\brain\c64c9236-d848-460f-9648-cdf9804fb178"
$dest = "E:\qanati_player_page\public\stores"

# Create directory
New-Item -ItemType Directory -Force -Path $dest | Out-Null

# Copy files
Copy-Item "$source\store_microsoft_1769885606968.png" "$dest\store_microsoft.png"
Copy-Item "$source\store_samsung_1769885622358.png" "$dest\store_samsung.png"
Copy-Item "$source\store_lg_1769885639753.png" "$dest\store_lg.png"
Copy-Item "$source\store_amazon_1769885654515.png" "$dest\store_amazon.png"

Write-Host "Done! All store icons copied successfully." -ForegroundColor Green
