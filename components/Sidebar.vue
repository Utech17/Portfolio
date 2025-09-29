<template>
  <aside class="sidebar" >
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/avatar.png" alt="Miguel Gutierrez" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Miguel Gutierrez">
          Miguel Gutierrez
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <BtnCV/>
        </p>
        <div style="margin: 1rem 0;" />
        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span>Desarrollador Web</span>
        </p>
      </div>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Email
            </p>
            <a href="mailto:gutierrez.suarez2005@gmail.com" class="contact-link">gutierrez.suarez2005@gmail.com</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Github
            </p>
            <a href="https://github.com/Utech17" class="contact-link" target="_blank">Utech17</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Dirección
            </p>
            <address>Venezuela</address>
          </div>
        </li>
      </ul>

      <div class="separator" />

      <ul class="social-list">
        <li class="social-item">
          <NuxtLink to="https://www.instagram.com/14mgutierrez" class="social-link">
            <ion-icon name="logo-instagram" />
          </NuxtLink>
        </li>
        <icons-flag-venezuela />
      </ul>
    </div>
  </aside>
</template>
