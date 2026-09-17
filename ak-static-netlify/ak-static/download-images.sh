#!/bin/bash
# =============================================================
# download-images.sh
# Run this ONCE in the ak-static/ folder to download all images
# from the live WordPress site before deploying to Netlify.
# =============================================================

set -e
cd "$(dirname "$0")"
mkdir -p assets/img

BASE="https://alexanderkolisch.com/wp-content/uploads"

echo "Downloading images from WordPress..."

# Profile photo
curl -sL "$BASE/2021/11/MicrosoftTeams-image-40-scaled-e1682270539394.jpg" -o assets/img/profile.jpg
echo "  ✓ profile.jpg"

# Favicon
curl -sL "https://alexanderkolisch.com/wp-content/uploads/2023/04/cropped-favicon-32x32-1-270x270.png" -o assets/img/favicon.png
echo "  ✓ favicon.png"

# Company logos
curl -sL "$BASE/2024/08/polo.png" -o assets/img/polo.png
echo "  ✓ polo.png"
curl -sL "$BASE/2023/03/284808160_3294101467486991_2122224324417860843_n.jpg" -o assets/img/severin.jpg
echo "  ✓ severin.jpg"
curl -sL "$BASE/2023/03/1531728790634-1.jpeg" -o assets/img/positec.jpeg
echo "  ✓ positec.jpeg"
curl -sL "$BASE/2023/03/22291546_10155645623301878_3382592380774630742_o.png" -o assets/img/thalia.png
echo "  ✓ thalia.png"
curl -sL "$BASE/2023/03/sj6uZFit_400x400.png" -o assets/img/sporttsclub.png
echo "  ✓ sporttsclub.png"
curl -sL "$BASE/2023/03/1648707992074.jpeg" -o assets/img/bertelsmann.jpeg
echo "  ✓ bertelsmann.jpeg"
curl -sL "$BASE/2023/03/steereo.de_-e1678361930729.jpg" -o assets/img/steereo.jpg
echo "  ✓ steereo.jpg"
curl -sL "$BASE/2023/03/1603967298078.jpeg" -o assets/img/hv.jpeg
echo "  ✓ hv.jpeg"
curl -sL "$BASE/2023/03/download.png" -o assets/img/emi.png
echo "  ✓ emi.png"
curl -sL "$BASE/2023/03/1519856491225.jpeg" -o assets/img/p7s1.jpeg
echo "  ✓ p7s1.jpeg"

# Education logos
curl -sL "$BASE/2022/10/download.png" -o assets/img/esade.png
echo "  ✓ esade.png"
curl -sL "$BASE/2022/10/download-1.png" -o assets/img/hdm.png
echo "  ✓ hdm.png"

# GuteNachtBus photos
curl -sL "$BASE/2025/01/20220117_213336.jpg" -o assets/img/gnb1.jpg
echo "  ✓ gnb1.jpg"
curl -sL "$BASE/2025/01/20211101_233158.jpg" -o assets/img/gnb2.jpg
echo "  ✓ gnb2.jpg"
curl -sL "$BASE/2025/01/20220117_223429.jpg" -o assets/img/gnb3.jpg
echo "  ✓ gnb3.jpg"
curl -sL "$BASE/2025/01/20211115_222626.jpg" -o assets/img/gnb4.jpg
echo "  ✓ gnb4.jpg"

echo ""
echo "Done! $(ls -1 assets/img/ | wc -l) images downloaded."
echo "Total size: $(du -sh assets/img/ | cut -f1)"
echo ""
echo "You can now deploy to Netlify."
