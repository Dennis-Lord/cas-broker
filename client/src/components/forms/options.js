// Contains array of options for each section

const oneOptions = [
    'Choose an option',
    'Tema Port',
    'Tarkoradi Port',
    'Outside'
  ]

  const cargoType = ['Container', 'Bulk', 'Other']

  const twoOptions = [
    '40ft Port',
    '20ft Port',
    'Bulk',
    'Other',
  ]

  const location = [
    'MPS', 
  'GJT', 
  'TBT', 
  'MAIN PORT', 
  'REFEER',
  'AMARIS',
  'Other',
  ]

  const yn = ['Yes', 'No']

  const trucktype = [
  '40FT FLATBED',
  '20FT FLATBED',
  'Both (40ft&20ft)',
  'SELF LOADER 20FT',
  'SELF LOADER 40FT',
  'Other',
  ]
  
  const paymentMode = [
  'Cash',
  'Cheque',
  'Mobile Money',
  ]
  
  const daysAfterDelivery = [
  '1 day',
  '2 - 3 days',
  ]

const channel = ['Red', 'Yellow', 'Green', 'Other']

const tnc = ['I agree', 'I don\'t agree'] 

const disclaimer = "The Broker will arrange for transportation of the Customer’s freight pursuant to these Terms and Conditions. Broker’s responsibility will be limited to arranging for, but not actually performing, transportation of Customer’s freight. Broker does not exercise or retain any control or supervision over any carrier, its operations, employees, or contractors. Broker reserves the right, in its sole discretion, to refuse any shipment at any time. The relationship between Broker and Customer is that of one independent contractor with another, and nothing herein is intended to create a joint venture, partnership, agency, or any employment relationship. Broker reserves the right to refer shipments to, and Customer approves such use of, Broker’s affiliates to provide transportation services for any shipment."
 
export {oneOptions, trucktype, twoOptions, paymentMode, daysAfterDelivery,location, yn, cargoType, tnc, channel, disclaimer}