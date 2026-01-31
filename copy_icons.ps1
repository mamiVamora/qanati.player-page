# Copy Icons Script - Fixed
$source = "C:\Users\Abdulaziz\.gemini\antigravity\brain\c64c9236-d848-460f-9648-cdf9804fb178"
$dest = "E:\qanati_player_page\public\icons"

# Remove file if exists (not directory)
if (Test-Path $dest -PathType Leaf) {
    Remove-Item $dest -Force
}

# Create directory
New-Item -ItemType Directory -Force -Path $dest | Out-Null

# Copy files
Copy-Item "$source\icon_mediakit_engine_1769883891338.png" "$dest\icon_mediakit_engine.png"
Copy-Item "$source\icon_hardware_intelligence_1769883905794.png" "$dest\icon_hardware_intelligence.png"
Copy-Item "$source\icon_multiview_1769883920089.png" "$dest\icon_multiview.png"
Copy-Item "$source\icon_picture_in_picture_1769883934140.png" "$dest\icon_picture_in_picture.png"
Copy-Item "$source\icon_glassmorphism_ui_1769883950929.png" "$dest\icon_glassmorphism_ui.png"
Copy-Item "$source\icon_ai_recommendations_1769883981554.png" "$dest\icon_ai_recommendations.png"
Copy-Item "$source\icon_voice_search_1769883993284.png" "$dest\icon_voice_search.png"
Copy-Item "$source\icon_smart_trailers_1769884007189.png" "$dest\icon_smart_trailers.png"
Copy-Item "$source\icon_server_stats_1769884022344.png" "$dest\icon_server_stats.png"
Copy-Item "$source\icon_command_center_1769884036350.png" "$dest\icon_command_center.png"
Copy-Item "$source\icon_parental_control_1769884067951.png" "$dest\icon_parental_control.png"
Copy-Item "$source\icon_recording_download_1769884081838.png" "$dest\icon_recording_download.png"
Copy-Item "$source\icon_audio_interactions_1769884095194.png" "$dest\icon_audio_interactions.png"

Write-Host "Done! All 13 icons copied successfully." -ForegroundColor Green
