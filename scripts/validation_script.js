frappe.ui.form.on('Sales Order',  'validate',  function(frm) {
    if (frm.doc.custom_delivery_mode === 'Delivery' && !frm.doc.shipping_address) {
        msgprint('Shipping Address is mandatory when Delivery Mode is set to Delivery');
        validated = false;
    }
});
