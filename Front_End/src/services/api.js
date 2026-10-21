// عنوان سيرفر الباك إند (تأكد من مطابقته لرابط الباك إند لديك)
const BASE_URL = 'http://localhost:5000'

// دالة مساعدة مركزية لإرسال الطلبات باستخدام fetch العادية
const request = async (endpoint, options = {}) => {
  // جلب التوكن المخزن عند تسجيل الدخول لإرساله مع الطلبات المحمية
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'حدث خطأ في الاتصال بالسيرفر');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error.message);
    throw error;
  }
};

// ==========================================
// 1. المصادقة (Auth & Users)
// ==========================================
export const loginApi = (credentials) => 
  request('/auth/login', { method: 'POST', body: JSON.stringify(credentials) });

export const getProfileApi = () => 
  request('/auth/profile');


// ==========================================
// 2. الطلاب (Students) [تستخدمها السكرتيرة غالباً]
// ==========================================
export const getStudentsApi = () => 
  request('/students');

export const createStudentApi = (studentData) => 
  request('/students', { method: 'POST', body: JSON.stringify(studentData) });

export const updateStudentApi = (id, studentData) => 
  request(`/students/${id}`, { method: 'PUT', body: JSON.stringify(studentData) });

// الحذف الناعم (Soft Delete) مع إرسال سبب الحذف حسب الملف المرجعي
export const deleteStudentApi = (id, reason) => 
  request(`/students/${id}`, { method: 'DELETE', body: JSON.stringify({ reason }) });


// ==========================================
// 3. المدرسون والسكرتارية (Teachers & Secretaries) [للمدير Admin]
// ==========================================
export const getTeachersApi = () => request('/teachers');
export const createTeacherApi = (data) => request('/teachers', { method: 'POST', body: JSON.stringify(data) });

export const getSecretariesApi = () => request('/secretaries');
export const createSecretaryApi = (data) => request('/secretaries', { method: 'POST', body: JSON.stringify(data) });


// ==========================================
// 4. الشعب الدراسية (ClassSections)
// ==========================================
export const getClassSectionsApi = () => 
  request('/class-sections');

export const createClassSectionApi = (sectionData) => 
  request('/class-sections', { method: 'POST', body: JSON.stringify(sectionData) });


// ==========================================
// 5. الفواتير المالية (Invoices)
// ==========================================
export const getInvoicesApi = () => 
  request('/invoices');

export const createInvoiceApi = (invoiceData) => 
  request('/invoices', { method: 'POST', body: JSON.stringify(invoiceData) });


// ==========================================
// 6. التقييمات والعلامات (Evaluations)
// ==========================================
export const getEvaluationsApi = () => 
  request('/evaluations');

export const createEvaluationApi = (evalData) => 
  request('/evaluations', { method: 'POST', body: JSON.stringify(evalData) });