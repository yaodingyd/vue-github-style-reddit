<template>
  <div class="position-relative js-header-wrapper">
    <div class="header" role="banner">
      <div class="container-lg px-3 clearfix">
        <div class="d-flex flex-justify-between">
          <div class="d-flex">
            <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
              <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
            <div class="mr-2">
              <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
                <form accept-charset="UTF-8" class="js-site-search-form">
                  <div style="margin:0;padding:0;display:inline">
                    <input name="utf8" type="hidden" value="✓">
                  </div>
                  <label class="form-control header-search-wrapper js-chromeless-input-container">
                    <a href="https://yaodingyd.github.io" class="header-search-scope no-underline">This repository</a>
                    <input type="text" class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable" data-hotkey="s" name="q" value="" placeholder="Search" aria-label="Search this repository" data-unscoped-placeholder="Search GitHub" data-scoped-placeholder="Search" autocapitalize="off">
                    <input type="hidden" class="js-site-search-type-field" name="type">
                  </label>
                </form>
              </div>
            </div>

            <ul class="d-flex list-style-none" role="navigation">
              <li>
                <a href="/" aria-label="Pull requests you created" class="js-selected-navigation-item header-navlink">Pull requests</a></li>
              <li>
                <a href="/" aria-label="Issues you created" class="js-selected-navigation-item header-navlink">Issues</a>
              </li>
              <li>
                <a href="/" class="js-selected-navigation-item header-navlink">Marketplace</a>
              </li>
              <li>
                <a class="header-navlink" href="/">Gist</a>
              </li>
            </ul>
          </div>

          <div class="d-flex">
            <ul class="d-flex user-nav list-style-none">
              <li class="dropdown js-menu-container">
                <a href="*" class="header-navlink notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator">
                  <span class="mail-status "></span>
                  <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
                </a>
              </li>
              <li class="dropdown js-menu-container">
                <a class="header-navlink tooltipped tooltipped-s js-menu-target" href="*">
                  <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path></svg>
                  <span class="dropdown-caret"></span>
                </a>
              </li>
              <li class="dropdown js-menu-container js-transitionable">
                <a class="header-navlink name tooltipped tooltipped-sw js-menu-target" href="*">
                  <img alt="@yaodingyd" class="avatar" src="https://avatars3.githubusercontent.com/u/11392695?v=4&amp;s=40" height="20" width="20">
                  <span class="dropdown-caret"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
