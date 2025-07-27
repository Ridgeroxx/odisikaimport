# EmailJS Template Setup Guide

You need to create a pre-order email template in your EmailJS account for the pre-order functionality to work properly.

## Steps to Create Pre-order Email Template:

1. **Go to EmailJS Dashboard**: https://www.emailjs.com/
2. **Login** with your account that has service `service_sbijez1`
3. **Go to Email Templates** section
4. **Create New Template** with ID: `template_preorder`

## Template Content:

### Subject:
```
New Pre-Order Request - {{product_name}}
```

### HTML Content:
```html
<h2>New Pre-Order Request Received</h2>

<div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3>Customer Information:</h3>
    <p><strong>Name:</strong> {{customer_name}}</p>
    <p><strong>Email:</strong> {{customer_email}}</p>
    <p><strong>Phone:</strong> {{customer_phone}}</p>
</div>

<div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3>Order Details:</h3>
    <p><strong>Product:</strong> {{product_name}}</p>
    <p><strong>Quantity:</strong> {{quantity}}</p>
    <p><strong>Additional Notes:</strong> {{notes}}</p>
</div>

<div style="background: #fff3e0; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p><strong>Order Submitted:</strong> {{order_time}}</p>
</div>

<p>Please contact this customer within 24 hours to confirm their order and provide payment details.</p>

<hr>
<p><em>This email was sent from the Odisika Import website pre-order system.</em></p>
```

### Template Variables:
Make sure these variables are set in the template:
- `{{to_name}}` - Admin name
- `{{product_name}}` - Product being ordered
- `{{customer_name}}` - Customer's name
- `{{customer_email}}` - Customer's email
- `{{customer_phone}}` - Customer's phone
- `{{quantity}}` - Order quantity
- `{{notes}}` - Additional notes
- `{{order_time}}` - When order was placed

## Current Issues Fixed:

1. ✅ **Course access timeout reduced** from 2 seconds to 1 second
2. ✅ **Currency changed** to Ghanaian Cedis (₵) for all products
3. ✅ **Pre-order system** now sends customer info to admin via email
4. ✅ **WhatsApp integration** redirects customers to WhatsApp group after pre-order
5. ✅ **JavaScript errors fixed** in course-script.js for button selectors

## Next Steps:

1. Create the `template_preorder` email template as described above
2. Update the WhatsApp phone number `233543210987` with your actual WhatsApp business number
3. Test the complete pre-order flow

The website is now fully functional with proper email notifications and WhatsApp integration!