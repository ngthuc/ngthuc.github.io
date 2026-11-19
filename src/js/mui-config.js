function activateModal(project) {
    // initialize modal element
    var modalEl = document.createElement('div');
    modalEl.className = 'row modal-custom';
    modalEl.id = 'lastwork-modal';

    // close button (click-outside / Escape already close it via mui's
    // overlay, but neither is obvious without an explicit control)
    var closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'modal-close-btn';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = function () {
        mui.overlay('off');
    };
    modalEl.appendChild(closeBtn);

    // add image, with a spinner shown until it finishes loading so the
    // modal doesn't sit on a blank area / jump in size once it pops in
    var div_img = document.createElement('div');
    div_img.className = 'col-lg-12 col-md-12 col-sm-12 col-xs-12 modal-image-wrap';
    div_img.id = 'image';

    var spinner = document.createElement('div');
    spinner.className = 'modal-spinner';
    div_img.appendChild(spinner);

    var img = document.createElement('img');
    img.alt = lastwork[project]['name'];
    img.style.visibility = 'hidden';
    img.onload = function () {
        img.style.visibility = 'visible';
        spinner.parentNode && spinner.parentNode.removeChild(spinner);
    };
    img.src = 'images/lastwork/' + project + '.max.png';

    div_img.appendChild(img);

    // add info
    var div_info = document.createElement('div');
    div_info.className = 'col-lg-12 col-md-12 col-sm-12 col-xs-12 row';
    div_info.style.margin = '10px auto 10px auto';
    div_img.id = 'info';

    // name
    var spanProjectName = document.createElement('div');
    spanProjectName.className = 'project-name';

    var strongProjectNameLabel = document.createElement('strong');
    strongProjectNameLabel.id = 'project-name-label';

    var projectNameLabel = document.createTextNode("Project: ");

    strongProjectNameLabel.appendChild(projectNameLabel);

    var projectNameText = document.createTextNode(lastwork[project]['name']);

    spanProjectName.appendChild(strongProjectNameLabel);
    spanProjectName.appendChild(projectNameText);

    // url
    var spanUrl = document.createElement('div');
    spanUrl.className = 'url';

    var strongUrlLabel = document.createElement('strong');
    strongUrlLabel.id = 'url-label';

    var urlLabel = document.createTextNode("URL: ");

    strongUrlLabel.appendChild(urlLabel);

    if (lastwork[project]['url'] != null) {
      var a = document.createElement('a');
      a.appendChild(document.createTextNode(lastwork[project]['url']));
      a.setAttribute('href', lastwork[project]['url']);
      a.setAttribute('target', '_blank');
    } else a = document.createTextNode('');

    if (lastwork[project]['url-status'] != 'active') {
      var status = document.createTextNode(' (' + lastwork[project]['url-status'] + ')');
    } else status = document.createTextNode('');

    spanUrl.appendChild(strongUrlLabel);
    spanUrl.appendChild(a);
    spanUrl.appendChild(status);

    // time
    var spanTime = document.createElement('div');
    spanTime.className = 'time';

    var strongTimeLabel = document.createElement('strong');
    strongTimeLabel.id = 'time-label';

    var timeLabel = document.createTextNode("Time: ");

    strongTimeLabel.appendChild(timeLabel);

    var timeText = document.createTextNode(lastwork[project]['time']);

    spanTime.appendChild(strongTimeLabel);
    spanTime.appendChild(timeText);

    // technical
    var spanTechnical = document.createElement('div');
    spanTechnical.className = 'technical';

    var strongTechnicalLabel = document.createElement('strong');
    strongTechnicalLabel.id = 'technical-label';

    var technicalLabel = document.createTextNode("Technical: ");

    strongTechnicalLabel.appendChild(technicalLabel);

    var technicalText = document.createTextNode(lastwork[project]['technical']);

    spanTechnical.appendChild(strongTechnicalLabel);
    spanTechnical.appendChild(technicalText);

    // position
    var spanPosition = document.createElement('div');
    spanPosition.className = 'position';

    var strongPositionLabel = document.createElement('strong');
    strongPositionLabel.id = 'position-label';

    var positionLabel = document.createTextNode("Position: ");

    strongPositionLabel.appendChild(positionLabel);

    var positionText = document.createTextNode(lastwork[project]['position']);

    spanPosition.appendChild(strongPositionLabel);
    spanPosition.appendChild(positionText);

    div_info.appendChild(spanProjectName);
    div_info.appendChild(spanUrl);
    div_info.appendChild(spanTime);
    div_info.appendChild(spanTechnical);
    div_info.appendChild(spanPosition);

    // add image and info
    modalEl.appendChild(div_img);
    modalEl.appendChild(div_info);

    // show modal
    mui.overlay('on', modalEl);
  }