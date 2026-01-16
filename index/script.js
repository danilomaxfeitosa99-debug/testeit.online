// Landing Page Video Interaction
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playVideo');
    const watchVideoBtn = document.getElementById('watchVideoBtn');
    const videoThumbnail = document.querySelector('.video-thumbnail');

    function handleVideoClick() {
        // Redireciona para o Google
        window.location.href = 'https://www.google.com';
    }

    if (playButton) {
        playButton.addEventListener('click', handleVideoClick);
    }

    if (watchVideoBtn) {
        watchVideoBtn.addEventListener('click', handleVideoClick);
    }

    if (videoThumbnail) {
        videoThumbnail.addEventListener('click', handleVideoClick);
    }

    // Smooth scroll para links internos
    const footerLinks = document.querySelectorAll('.footer-nav a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Se for um link interno, não precisa fazer nada especial
            // O navegador já cuida do comportamento padrão
        });
    });

    // Adicionar efeito de hover nos botões de prompt
    const promptButtons = document.querySelectorAll('.prompt-buttons button');
    promptButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Lógica para continuar ou assistir do início
            const buttonText = this.textContent;
            if (buttonText.includes('Continuar')) {
                // Continuar de onde parou
                console.log('Continuar assistindo');
            } else {
                // Assistir do início
                console.log('Assistir do início');
            }
        });
    });

    // Adicionar interatividade aos comentários (opcional)
    const commentLikes = document.querySelectorAll('.likes-count');
    commentLikes.forEach(like => {
        like.addEventListener('click', function() {
            // Incrementar likes (apenas visual, sem backend)
            const currentCount = parseInt(this.textContent);
            this.textContent = currentCount + 1;
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Animação suave ao carregar a página
    const contentBox = document.querySelector('.content-box');
    if (contentBox) {
        contentBox.style.opacity = '0';
        contentBox.style.transform = 'translateY(20px)';
        setTimeout(() => {
            contentBox.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            contentBox.style.opacity = '1';
            contentBox.style.transform = 'translateY(0)';
        }, 100);
    }

    // Animação para badges de certificação
    const certBadges = document.querySelectorAll('.cert-badge');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'scale(0.8)';
                    entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'scale(1)';
                    }, 50);
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    certBadges.forEach(badge => {
        badge.style.opacity = '0';
        observer.observe(badge);
    });
});

