var fetchFile = function(item) {
    fetch(item.url).then(res => res.blob().then(blob => {
        var a = document.createElement('a');
        var url = window.URL.createObjectURL(blob);
        var filename = item.name + ".mp3";
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
    }));
};

var downloadMp3 = function(...ids) {
    ids.forEach(id => {
        var musicItem = musicList[0].item[id - 1];
        if (musicItem && musicItem.url) {
            fetchFile(musicItem.url);
        } else {
            ajaxUrl(musicList[0].item[id - 1], fetchFile);
        }
    });
};
