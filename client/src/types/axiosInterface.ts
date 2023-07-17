/* 2023-07-07 Axios Custom Interceptor(나중에 도전) - 김다함 */
// import {
//   AxiosInstance,
//   AxiosInterceptorManager,
//   AxiosRequestConfig,
//   AxiosResponse
// } from 'axios'

// type CustomAxiosResponse<T = any> = {
//   response?: T
//   refreshToken?: string
// }

// export interface CustomAxiosInterface extends AxiosInstance {
//   interceptors: {
//     request: AxiosInterceptorManager<AxiosRequestConfig>;
//     response: AxiosInterceptorManager<AxiosResponse<CustomAxiosResponse>>;
//   }
//   get<T>(url: string, config?: AxiosRequestConfig): Promise<T>
//   delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>
//   post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
//   put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
//   patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
// }
