$(function() {
    let suspiciousUsers = getSuspiciousUsers();
    let suspiciousPages = getSuspiciousPages();
    
    // odszukanie komentarzy podejrzanych użytkowników w znalezisku
    $('body').find('article').each(function() {
        let article = $(this);
        let userName = getUsernameFromArticle(article.find('.username').first());
        
        if ($.inArray(userName, suspiciousUsers) !== -1) {
            matchElementAsSuspicious(article);
        }
    });
    
    $.each(suspiciousUsers, function() {
        
    });
});
