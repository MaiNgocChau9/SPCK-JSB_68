const observer = new IntersectionObserver(entries => entries.forEach(entry => 
entry.isIntersecting && entry.target.classList.add('in-view')),{threshold: 0.1});
document.querySelectorAll('.container').forEach(observer.observe.bind(observer));