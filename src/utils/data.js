export const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Wilson",
      specialty: "Cardiologist",
      location: "New York",
      rating: 4.9,
      image: "https://placehold.co/100x100",
      availability: "Available Today",
      availableTimes: ["9:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"],
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      location: "Boston",
      rating: 4.8,
      image: "https://placehold.co/100x100",
      availability: "Next Available: Tomorrow",
      availableTimes: ["10:00 AM", "1:30 PM", "3:00 PM"],
    },
    {
      id: 3,
      name: "Dr. Emily Brown",
      specialty: "Pediatrician",
      location: "Chicago",
      rating: 4.7,
      image: "https://placehold.co/100x100",
      availability: "Available Today",
      availableTimes: ["9:30 AM", "11:00 AM", "2:30 PM"],
    },
    {
      id: 4,
      name: "Dr. James Taylor",
      specialty: "Dermatologist",
      location: "Los Angeles",
      rating: 4.9,
      image: "https://placehold.co/100x100",
      availability: "Next Available: Friday",
      availableTimes: ["10:30 AM", "1:00 PM", "3:30 PM"],
    },
    {
      id: 5,
      name: "Dr. Lisa Anderson",
      specialty: "Orthopedist",
      location: "Miami",
      rating: 4.6,
      image: "https://placehold.co/100x100",
      availability: "Available Today",
      availableTimes: ["9:00 AM", "11:30 AM", "2:00 PM"],
    },
  ];
  
  export const pharmacists = [
    {
      id: 1,
      name: "Dr. Robert Johnson",
      specialty: "Clinical Pharmacist",
      location: "New York",
      rating: 4.9,
      image: "https://placehold.co/100x100",
      availability: "Available Today",
      deliveryTime: "Same-day delivery available",
    },
    {
      id: 2,
      name: "Dr. Lisa Martinez",
      specialty: "Compounding Pharmacist",
      location: "Boston",
      rating: 4.8,
      image: "https://placehold.co/100x100",
      availability: "Next Available: Tomorrow",
      deliveryTime: "Next-day delivery",
    },
    {
      id: 3,
      name: "Dr. David Wilson",
      specialty: "Geriatric Pharmacist",
      location: "Chicago",
      rating: 4.7,
      image: "https://placehold.co/100x100",
      availability: "Available Today",
      deliveryTime: "Same-day delivery available",
    },
    {
      id: 4,
      name: "Dr. Sarah Thompson",
      specialty: "Oncology Pharmacist",
      location: "Los Angeles",
      rating: 4.9,
      image: "https://placehold.co/100x100",
      availability: "Next Available: Friday",
      deliveryTime: "2-3 day delivery",
    },
    {
      id: 5,
      name: "Dr. Michael Chen",
      specialty: "Pediatric Pharmacist",
      location: "Miami",
      rating: 4.6,
      image: "https://placehold.co/100x100",
      availability: "Available Today",
      deliveryTime: "Same-day delivery available",
    },
  ];
  
  export const nutritionists = [
    {
      id: 1,
      name: "Emma Rodriguez",
      specialty: "Sports Nutrition",
      location: "New York",
      rating: 4.9,
      image: "https://placehold.co/100x100",
      availability: "Available Today",
      consultationTypes: ["Virtual", "In-person"],
      specialFocus: "Performance optimization for athletes",
    },
    {
      id: 2,
      name: "Daniel Kim",
      specialty: "Weight Management",
      location: "Boston",
      rating: 4.8,
      image: "https://placehold.co/100x100",
      availability: "Next Available: Tomorrow",
      consultationTypes: ["Virtual", "In-person"],
      specialFocus: "Sustainable weight loss strategies",
    },
    {
      id: 3,
      name: "Sophia Patel",
      specialty: "Plant-Based Nutrition",
      location: "Chicago",
      rating: 4.7,
      image: "https://placehold.co/100x100",
      availability: "Available Today",
      consultationTypes: ["Virtual"],
      specialFocus: "Vegan and vegetarian meal planning",
    },
    {
      id: 4,
      name: "Marcus Johnson",
      specialty: "Clinical Nutrition",
      location: "Los Angeles",
      rating: 4.9,
      image: "https://placehold.co/100x100",
      availability: "Next Available: Friday",
      consultationTypes: ["Virtual", "In-person"],
      specialFocus: "Nutrition for chronic disease management",
    },
    {
      id: 5,
      name: "Olivia Martinez",
      specialty: "Pediatric Nutrition",
      location: "Miami",
      rating: 4.6,
      image: "https://placehold.co/100x100",
      availability: "Available Today",
      consultationTypes: ["Virtual", "In-person"],
      specialFocus: "Healthy eating habits for children",
    },
  ];
  
  export const dietaryPreferences = [
    { value: "no-restrictions", label: "No Restrictions" },
    { value: "vegetarian", label: "Vegetarian" },
    { value: "vegan", label: "Vegan" },
    { value: "gluten-free", label: "Gluten-Free" },
    { value: "dairy-free", label: "Dairy-Free" },
    { value: "keto", label: "Ketogenic" },
    { value: "paleo", label: "Paleo" },
    { value: "low-carb", label: "Low Carb" },
    { value: "mediterranean", label: "Mediterranean" },
  ];
  
  export const mealPlanTypes = [
    { value: "weight-loss", label: "Weight Loss" },
    { value: "muscle-gain", label: "Muscle Gain" },
    { value: "maintenance", label: "Maintenance" },
    { value: "disease-management", label: "Disease Management" },
    { value: "sports-performance", label: "Sports Performance" },
  ];
  
  export const mealPlanFees = {
    basePlan: 99,
    customization: 25,
    tax: 12,
  };
  
  export const paymentMethods = [
    { id: "credit-card", name: "Credit Card", icon: "💳" },
    { id: "debit-card", name: "Debit Card", icon: "💳" },
    { id: "paypal", name: "PayPal", icon: "📱" },
    { id: "apple-pay", name: "Apple Pay", icon: "🍎" },
    { id: "google-pay", name: "Google Pay", icon: "🤖" },
  ];
  
  export const appointmentFees = {
    consultation: 150,
    bookingFee: 10,
    tax: 16,
  };
  
  export const medicationFees = {
    medicationCost: 75,
    deliveryFee: 5,
    tax: 8,
  };
  
  export const locationOptions = [
    { value: "new-york", label: "New York" },
    { value: "boston", label: "Boston" },
    { value: "chicago", label: "Chicago" },
    { value: "los-angeles", label: "Los Angeles" },
    { value: "miami", label: "Miami" },
  ];
  
  export const ratingOptions = [
    { value: "4.9", label: "4.9+" },
    { value: "4.8", label: "4.8+" },
    { value: "4.7", label: "4.7+" },
    { value: "4.6", label: "4.6+" },
  ];
  
  export const specialtyOptions = [
    { value: "clinical", label: "Clinical" },
    { value: "compounding", label: "Compounding" },
    { value: "geriatric", label: "Geriatric" },
    { value: "oncology", label: "Oncology" },
    { value: "pediatric", label: "Pediatric" },
  ];
  
  export const nutritionSpecialtyOptions = [
    { value: "sports", label: "Sports Nutrition" },
    { value: "weight", label: "Weight Management" },
    { value: "plant-based", label: "Plant-Based" },
    { value: "clinical", label: "Clinical Nutrition" },
    { value: "pediatric", label: "Pediatric Nutrition" },
  ];
  