/**
 * Routes that do not require authentication
 */
export  const publicRoutes = [
    "/",
    "/about",
    "/contact",
]
/**
 * Routes that require authentication
 */
export const authRoutes = [
    
    "/portfolio",    
    
]

export const apiAuthPrefix = "/api/auth"

export const DEFAULT_LOGIN_REDIRECT = "/portfolio"