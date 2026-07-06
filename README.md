# ZSCORT_V1_GSU26SAP05_UI

UI / BSP / Fiori app tier of SCORT V1 (ZSCORT_GSU26SAP05).

## Contents

- **Fiori BSP application** (`src/webapp/zscort_v1_of/`)
  - `manifest.json` - Fiori/UI5 app descriptor
  - `Component.js` - UI5 component entry point
  - `webapp/ext/controller/` - extension controllers
  - `webapp/ext/fragment/` - extension fragments
  - `i18n/i18n.properties` - internationalization
  - `annotations/annotation.xml` - local annotations

## SAP Package Assignment

BSP name: `ZSCORT_V1_OF` (12 chars)
Root package: `ZSCORT_V1_UI` (12 chars)

Full qualified path (≤ 30 chars): `ZSCORT_V1_UI_WEBAPP_ZSCORT_V1_OF` = 30 chars ✓

## Install

1. Activate DB_CORE and API tiers first
2. Clone this repo into package `ZSCORT_V1_UI`
3. abapGit will pull BSP application as a single webapp folder

## Launch in Fiori Launchpad

```
/sap/bc/ui5_ui5/sap/zscort_v1_of/
```
