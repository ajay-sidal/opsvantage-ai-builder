/**
 * 💳 STRIPE CLIENT: Initialize the Stripe API
 *
 * This is the central point for all Stripe API calls.
 */

import Stripe from 'stripe';

// FIX: We remove the 'throw new Error' block so the build doesn't crash.
// Instead, we provide a fallback string. The real key will be loaded from Cloud Run variables at runtime.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_dummy_key_for_build", {
  apiVersion: "2023-10-16", // use your existing version
  typescript: true,
});

export default stripe;
