print('----------------------------------------------------------------------------')
print('catalogue')
print('----------------------------------------------------------------------------')
print('Product A : $20')
print('Product B : $40')
print('Product C : $50')
print('----------------------------------------------------------------------------')

# getting quantity and whether gift wrapping is required or not for each product
quantity_a = int(input('Enter the required quantity for Product A: '))
giftwrap_a = int(input('Gift wrap required or not (1/0): '))
quantity_b = int(input('Enter the required quantity for Product B: '))
giftwrap_b = int(input('Gift wrap required or not (1/0): '))
quantity_c = int(input('Enter the required quantity for Product C: '))
giftwrap_c = int(input('Gift wrap required or not (1/0): '))

total_amount_a = quantity_a*20
total_amount_b = quantity_b*40
total_amount_c = quantity_c*50
total_amount = total_amount_a+total_amount_b+total_amount_c

# Checking the total quantity in cart to apply flat_10_discount
flat_10_discount = 0
if total_amount > 200:
    flat_10_discount = 10

# Checking each product quantity to apply bulk_5_discount
bulk_5_discount_a, bulk_5_discount_b, bulk_5_discount_c = 0, 0, 0
if quantity_a > 10:
    bulk_5_discount_a = total_amount_a * 0.05 
if quantity_b > 10:
    bulk_5_discount_b = total_amount_b * 0.05 
if quantity_c > 10:
    bulk_5_discount_c = total_amount_c * 0.05
bulk_5_discount = bulk_5_discount_a + bulk_5_discount_b + bulk_5_discount_c

# checking total cart quantity to apply bulk_10_discount
bulk_10_discount = 0
if (quantity_a + quantity_b + quantity_c) > 20:
    bulk_10_discount = total_amount*0.1

# checking and applying tiered_50_discount
tiered_50_discount_a,tiered_50_discount_b,tiered_50_discount_c = 0, 0, 0
total_quantity = quantity_a + quantity_b + quantity_c
if total_quantity > 30 and quantity_a > 15:
    discountable_a = quantity_a-15
    tiered_50_discount_a = discountable_a*0.5*20

if total_quantity > 30 and quantity_b > 15:
    discountable_b = quantity_b-15
    tiered_50_discount_b = discountable_b*0.5*40

if total_quantity > 30 and quantity_c > 15:
    discountable_c = quantity_c-15
    tiered_50_discount_c = discountable_c*0.5*50
tiered_50_discount = tiered_50_discount_a+tiered_50_discount_b+tiered_50_discount_c

# Selecting the most profitable discount for customer
discount = max(flat_10_discount, bulk_5_discount, bulk_10_discount, tiered_50_discount)
if discount == 0:
    discount_name = 'No Discounts Available'
elif discount == flat_10_discount:
    discount_name = 'flat_10_discount'
elif discount == bulk_5_discount:
    discount_name = 'bulk_5_discount'
elif discount == bulk_10_discount:
    discount_name = 'bulk_10_discount'
elif discount == tiered_50_discount:
    discount_name = 'tiered_50_discount'
else:
    discount_name = 'No Discounts Available'

# calculating gift wrap charges
giftwrap = 0
if giftwrap_a == 1:
    giftwrap = giftwrap+quantity_a
if giftwrap_b == 1:
    giftwrap = giftwrap+quantity_b
if giftwrap_c == 1:
    giftwrap = giftwrap+quantity_c

# calculating shipping fee
shipping_fee = (total_quantity//10)*5

# printing output
print('----------------------------------------------------------------------------')
print(f'Product:Product A \nQuantity:{quantity_a}\nTotal amount of Product A:${total_amount_a}')
print('----------------------------------------------------------------------------')
print(f'Product:Product B \nQuantity:{quantity_b}\nTotal amount of Product A:${total_amount_b}')
print('----------------------------------------------------------------------------')
print(f'Product:Product C \nQuantity:{quantity_c}\nTotal amount of Product A:${total_amount_c}')
print('----------------------------------------------------------------------------')
print(f'Subtotal: ${total_amount}')  # Subtotal
print(f'Discount applied :{discount_name} \nDiscount amount: ${discount}')  # Discount details
print(f'Shipping fee:${shipping_fee} \nGiftwrap charge:${giftwrap}')  # Shipping and giftwrap charges
print(f'Total amount: ${(total_amount+shipping_fee+giftwrap)-discount}')  # Total
