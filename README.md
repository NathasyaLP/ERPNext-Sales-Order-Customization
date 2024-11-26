# ERPNext Sales Order Customization
This repository contains custom scripts and configurations for extending the Sales Order functionality in ERPNext to streamline the workflow for a mid-sized business dealing with selling and purchasing products.
# Overview
The goal of this customization is to improve the Sales Order module in ERPNext by adding additional features and validations. This includes creating a new custom field, adding validation rules, and adding custom scripts to improve user experience.
These customizations include:
- Adding a custom field: Delivery Mode (e.g., Delivery, Pickup).
- Validation to ensure Shipping Address is mandatory if "Delivery Mode" is set to "Delivery."
- Adding a button to generate a Delivery Note directly from the Sales Order.
- Displaying a pop-up alert showing the Total Amount of the Sales Order upon saving.
# Features
1. Custom Field: Delivery Mode
  - Tracks whether the Sales Order is for Delivery or Pickup.
  - Ensures smoother workflows based on delivery type.
2. Validation Rule
  - If "Delivery Mode" is Delivery, the Shipping Address field becomes mandatory.
3. Delivery Note Button
  - Adds a button in the Sales Order form to generate a Delivery Note directly.
4. Pop-Up Alert
  - Displays the total amount of the Sales Order in a pop-up alert when the document is saved.
# Installation
## Prerequisites
- An existing installation of ERPNext (v13 or higher).
- Access to the Custom Script and Custom Field modules in ERPNext.
## Steps
1. Clone this repository
  ```language
    git clone https://github.com/NathasyaLP/ERPNext-Sales-Order-Customization.git
  ```
2. Add Custom Field
   - Login to ERPNext as Administrator
   - Navigate to Sales Order List
   - Click three dots and select Customize
   - Click Add Field :
     - fieldtypes : Select
   - Fill :
     - Field Label : Delivery Mode
     - Field Name : custom_delivery_mode
     - Options :
       Delivery
       Pickup
     - Click Update
3. Add Custom Scripts
   - Navigate to Client Script
   - Create new Custom Scripts for the Sales Order doctype and paste the content of the following files:
     - `scripts/validation_script.js`
     - `scripts/delivery_note_button.js`
     - `scripts/total_amount_popup.js`
4. Reload ERPNext to apply changes
## Usage
1. Delivery Mode Custom Field
   - When creating or editing a Sales Order, select a value for the new field `Delivery Mode`.
2. Validation
   - If `Delivery Mode` is set to `Delivery`, the `Shipping Address` field becomes mandatory.
3. Delivery Note Button
   - A button labeled `Generate Delivery Note` appears on the Sales Order form.
   - Click the button to directly create a Delivery Note from the Sales Order.
4. Pop-Up Alert
   - When saving a Sales Order, a pop-up alert displays the `Total Amount`.
## Screenshots
1. Sales Order Form with Delivery Mode
   - ![Custom Field](https://drive.google.com/uc?export=view&id=1-aGlxQQHSz9mg_Rjmxmd886uwf1lLFRg)
2. Validation Error
   - ![Shipping Validation Error](https://drive.google.com/uc?export=view&id=1VKy_990XinBFQLq1qjF5CW4o1iaqoDvD)
3. Delivery Note Button
   - ![Delivery Note Button](https://drive.google.com/uc?export=view&id=1bLgEJQBzLjXwk-wtoSGWz6vm-y2TTPzB)
4. Pop-Up Alert
   - - ![Pop-Up Alert](https://drive.google.com/uc?export=view&id=1c_0vnph874xpGkEsiaftpBuJ4yYEXm9v)
