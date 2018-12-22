
//cria uma lista com os videos do canal especificado
function bildMyList(json){
    var videos = json.items; //array com os v�deos
    var youtubeUrl = 'https://www.youtube.com/watch?v='; //padrao de URL do YouTube
    var output_html = "";
    for(i = 0; i < videos.length; i++){
        output_html += "<div class=\"video-item\">";
        output_html += "<div class=\"content\">";
        output_html += "<a class=\"callPlayer\" url=\"" + youtubeUrl + videos[i].id.videoId + "\">";
        //output_html += "<a class=\"callPlayer\" href=\"#\">";
        output_html += "<img src=\""+ videos[i].snippet.thumbnails.medium.url+"\" width=\"" 
                                    + videos[i].snippet.thumbnails.medium.width + "\" height=\"" 
                                    + videos[i].snippet.thumbnails.medium.height +"\"/>";
        output_html += "<h2>";                
        output_html += videos[i].snippet.title.substr(0, 70);
        output_html += "</h2>";
        output_html += "<p>";
        //output_html += videos[i].snippet.description.substr(0, 90);
        output_html += "</p>";
        output_html += "</a>";
        output_html += "</div>";
        output_html += "</div>";
        
    }
    document.getElementById("container").innerHTML = output_html;
}    
function ajaxCaller(urlToBeCalled){
    $.ajax(urlToBeCalled, {
        beforeSend: function () { 
            // Requisição AJAX está para ser enviada     
        },
        complete: function () { 
            // Requisição AJAX completou    
        },
        success: function (data) {
            // Requisição AJAX completou com sucesso
            var dados ="";
            dados = data;
            bildMyList(dados);
        },      
        error: function () { 
            // Requisição AJAX completou com erro
            console.log('erro')
        }
    })
}    
    
ajaxCaller('https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=UCZLFY-N0R2ZUT7ljqyA7C9A&key=AIzaSyDREEq6vLsuMwg0qiZnzOwTodr4eN2mYRY&maxResults=6&type=video&order=date&fields=items(id(videoId)%2Csnippet(title%2Cdescription%2Cthumbnails(medium)))&prettyPrint=false');
       
 