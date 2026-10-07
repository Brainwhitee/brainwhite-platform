'use server';

export async function submitWaitlist(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const company = formData.get('company');
  const companySize = formData.get('companySize');
  
  if (!email || !name) {
    return { success: false, error: 'Name and email are required.' };
  }

  // TODO: Call FastAPI backend
  // const res = await fetch('http://localhost:8000/api/v1/waitlist', { ... })
  
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  console.log('Waitlist submission received:', { name, email, company, companySize });
  
  return { success: true };
}
