export const routes: string[] = [
  'login', 
  'sessions', 
  'booking', 
  'info', 
  'report', 
  'confirm', 
  'bill', 
  'logout']

export const changePage = (data: any) => {
    window.location.assign('http://localhost:5173/' + routes[data.key])
  }
