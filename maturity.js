function checkMaturity(endDate) {
  const now = new Date();
  const end = new Date(endDate);

  if (now < end) {
    const diff = end - now;

    return {
      allowed: false,
      message: "মেয়াদ শেষ না হওয়ায় উত্তোলন করা যাবে না",
      remaining: diff
    };
  }

  return { allowed: true };
}
