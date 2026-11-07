# سِجلان — سياسة الخصوصية الرسمية

موقع مستقل، عربي / English، متجاوب، مبني باستخدام Tailwind CSS ويُنشر تلقائيًا على GitHub Pages.

**Live URL (after Pages is enabled):** https://qaidsaher.github.io/sijlan-privacy-policy/

**App:** سِجلان: دفتر حسابات وديون
**Android package:** `com.saherqaid.sijlan`
**Developer:** Saher Qaid (`saher qaid`)
**Contact address from app code:** `support@sijlan.app`
**Policy updated:** 2026-11-07

## Local build

```sh
npm install
mkdir -p dist/assets
cp index.html dist/index.html
npm run build
```

Open `dist/index.html` to preview; the GitHub Actions workflow builds and deploys it on each push to main.

## Google Play checklist (verify before re-submission)

- Confirm the **public developer name** in Play Console matches **Saher Qaid / saher qaid**.
- Confirm `support@sijlan.app` is a **real working inbox** controlled by the developer and ideally matches Play listing support contact. Replace it if not.
- Verify that the **published APK/AAB** actually matches the reviewed `Qaidsaher/sijlan` code. If not, update the policy.
- Add a **direct accessible privacy-policy link within the app**. The current registration checkbox names the policy but does not provide a tappable link in the reviewed code.
- Make sure the Play Console **Data safety** answers match the version actually distributed.
- Verify and secure backup handling in the app: current backup creation without a supplied password uses a **fixed default key**, and pre-restore snapshots can be unencrypted JSON. This is a code security issue, not a website issue.
- Review local account deletion usability and exported-file removal instructions.
- Under repository **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
- Check the **Actions** tab for a successful deployment, then verify the live URL and set it in Play Console → App content → Privacy policy.

## Scope

This website describes behavior observed in the application's source on 2026-11-07. It does not attest to unpublished / differently configured binaries. The policy page should remain consistent with real behavior and permissions in releases. No analytics or ads are installed on this static website; font assets are requested from Google Fonts and the site is hosted by GitHub Pages.
