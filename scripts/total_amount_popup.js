frappe.ui.form.on('Sales Order', {
    after_save: function(frm) {
        frappe.msgprint(__('Total Amount for this Sales Order is: ') + frm.doc.grand_total);
    }
});
