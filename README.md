### 5. Payment Schema

```javascript
const paymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  method: { type: String, enum: ['card', 'subscription'] },
  paymentIntentId: String,
  status: { type: String, enum: ['succeeded', 'failed', 'refunded'] },
});
```

### 6. Message Schema

```javascript
const messageSchema =
  new Schema() <
  IMessageDocument >
  ({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  });
```

### 7. user Feedback Schema

```javascript
const userFeedbackSchema =
  new Schema() <
  IUserFeedbackDocument >
  ({
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    message: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  });
```

### Api Endpoints:

## Auth Api

## 1. Register a user

**Endpoint:** `/api/v1/auth/register`

**Method:** `POST`

## 2. Login a user

**Endpoint:** `/api/v1/auth/login`

**Method:** `POST`

## SERVICE API

### 1. Create an service(admin Only)

**Endpoint:** `/api/v1/services`

**Method:** `POST`

### 2. Update service (admin only)

**Endpoint:** `/api/v1/services/:id`

**Method:** `PUT`

### 3. Delete service (admin only)

**Endpoint:** `/api/v1/services/:id`

**Method:** `DELETE`

### 4. Get all services

**Endpoint:** `/api/v1/services`

**Method:** `GET`

### 5. Get one service

**Endpoint:** `/api/v1/services/:id`

**Method:** `GET`

## Booking Api

### 1. Create booking

**Endpoint:** `/api/v1/bookings`

**Method:** `POST`

### 2. Get bookings for a user

**Endpoint:** `/api/v1/bookings/user/userId`

**Method:** `GET`

### 3.Get single booking

**Endpoint:** `/api/v1/bookings/:id`

**Method:** `GET`

### 4. Update booking status (admin only)

**Endpoint:** `/api/v1/bookings/:id/status`

**Method:** `PATCH`

### 5. Cancle Booking

**Endpoint:** `/api/v1/bookings/:id/cancle-booking`

**Method:** `DELETE`

## Payments API

### 1. Stripe One-Time Payment Checkout

**Endpoint:** `/api/v1/payments/checkout`  
**Method:** `POST`  
**Description:** Initiates a one-time payment checkout session using Stripe.

---

### 2. Stripe Subscription Checkout

**Endpoint:** `/api/v1/payments/subscription`  
**Method:** `POST`  
**Description:** Creates a Stripe subscription checkout session for recurring payments.

---

### 3. Stripe Webhook Handler

**Endpoint:** `/api/v1/payments/webhook`  
**Method:** `POST`  
**Description:** Handles webhook events sent from Stripe (e.g., subscription created, invoice paid).

---

### 4. Get User's Payment History

**Endpoint:** `/api/v1/payments/user/:userId`  
**Method:** `GET`  
**Description:** Retrieves the payment history for a specific user by user ID.

---

## Subscription API

### 1. Create an subscription(admin only)

**Endpoint:** `/api/v1/admin/subscriptions`  
**Method:** `POST`  
**Description:** Create a new subscription plan.

---

### 2. Get all subscription plans

**Endpoint:** `/api/v1/admin/subscriptions`  
**Method:** `GET`  
**Description:** Get all subscription plan creted by admin.

---

### 3. Update any subscription plans(admin only)

**Endpoint:** `/api/v1/admin/subscriptions/:id`  
**Method:** `PATCH`  
**Description:** Update availbale subscription plan by admin.

---

### 4. Delete any subscription plans(admin only)

**Endpoint:** `/api/v1/admin/subscriptions/:id`  
**Method:** `PATCH`  
**Description:** Update availbale subscription plan by admin.

---

## 👤 User Dashboard

### 1. Get User Profile

**Endpoint:** `/api/v1/user/profile`  
**Method:** `GET`  
**Description:** Retrieves the currently logged-in user's profile information.

---

### 2. Get User Payment History

**Endpoint:** `/api/v1/user/payments`  
**Method:** `GET`  
**Description:** Fetches the logged-in user's past payment transactions.

---

### 3. Get Current Subscription Details

**Endpoint:** `/api/v1/user/subscription`  
**Method:** `GET`  
**Description:** Returns the user's current active subscription information.

---

## 🛠️ Admin Dashboard

### 1. Get All Registered Users

**Endpoint:** /api/admin/users  
**Method:** GET  
**Description:** Retrieves a list of all users registered on the platform.

---

### 2. Get All Services

**Endpoint:** /api/admin/services  
**Method:** GET  
**Description:** Retrieves all available services offered in the system.

---

### 3. Get All Service Bookings

**Endpoint:** /api/admin/bookings  
**Method:** GET  
**Description:** Retrieves all service bookings made by users.

---

### 4. Get All Stripe/Online Payments

**Endpoint:** /api/admin/payments  
**Method:** GET  
**Description:** Retrieves all payment transactions processed via Stripe or other online gateways.

---

### 5. Get Reports (Revenue, Top Services, Active Subscriptions)

**Endpoint:** /api/admin/reports  
**Method:** GET  
**Description:** Provides analytics reports including total revenue, most booked services, and active subscription stats.

---
