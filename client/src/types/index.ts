// ============================================================
// API Response wrapper — matches backend ApiResponse class
// ============================================================
export interface ApiResponse<T> {
    statusCode: number;
    data: T;
    message: string;
    success: boolean;
}

// ============================================================
// Generic Account / User Types Boilerplate
// ============================================================
export interface Account {
    id: string;
    name: string;
    email: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface LoginResponse {
    account: Account;
    token: string;
}
