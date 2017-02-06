<div id="about">
    <div class="cLeft">
        <h1>Мои Контакты:</h1>
        <br />
        <dl>
            <dt class="icon-gmail"></dt>
            <dd>GMail:
                <br /><a href="mailto:kanektikys@gmail.com" title="письмо">KANekTikys@gmail.com</a>
                <br />
            </dd>
            <dt class="icon-jabber"></dt>
            <dd>Jabber:
                <br /><a href="xmpp://kanektikys@jabber.ru">kanektikys@jabber.ru</a>
                <br />
            </dd>
            <dt class="icon-phone"></dt>
            <dd>Skype:
                <br /><a href="skype:kanektikys">KANekTikys</a>
                <br />
            </dd>
            <dt class="icon-vk"></dt>
            <dd>VK:
                <br /><a target="_blank" href="http://vk.com/kanektikys">Андрей KANekT Пронин</a>
                <br />
            </dd>
        </dl>
        <h1>Разработка:</h1>
        <br />
        <dl>
            <dt class="icon-github"></dt>
            <dd>GitHub:
                <br /><a target="_blank" href="https://github.com/KANekT">KANekT</a>
                <br />
            </dd>
            <dt class="icon-punbb"></dt>
            <dd>PunBB:
                <br /><a target="_blank" href="http://punbb.ru/user1737.html">KANekT</a>
                <br />
            </dd>
            <dt class="icon-monstra"></dt>
            <dd>Monstra:
                <br /><a target="_blank" href="http://ru.forum.monstra.org/user/104/">KANekT</a>
                <br />
            </dd>
        </dl>
    </div>
    <div class="cRight">
        <h1>Написать письмо:</h1>
        <br />
        <form id="feedbackForm" method="post">
            <input type="hidden" value="feedbackForm" name="formid">
            <div class="field">

                <label><strong>Ваше Имя<i>*</i></strong> <span id="error-name" class="error hidden"><small>Вы не указали Имя</small></span></label>

                <input type="text" value="" name="name" id="name" class="textbox rounded-small" autofocus required>
            </div>
            <div class="field">
                <label><strong>Ваш email<i>*</i></strong> <span id="error-email" class="error hidden"><small>Вы не указали правильный Email</small></span></label>

                <input type="text" value="" name="email" id="email" class="textbox rounded-small" required>
            </div>
            <div class="field">
                <label><strong>Сообщение<i>*</i></strong> <span id="error-message" class="error hidden"><small>Вы не написали сообщение</small></span></label>
                <textarea name="message_html" id="message_html" class="textarea rounded-small" required></textarea>
            </div>
            <div class="field btn-group">
                <input type="submit" value="Отправить сообщение" class="btn bLeft" name="submit" id="submit">
                <input type="reset" value="Очистить форму" class="btn bRight" name="reset" id="reset">
            </div>
            <div class="field"><span class="email-send"></span>
            </div>
        </form>
		<script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
		<script type="text/javascript">
		   (function(){
		      emailjs.init("user_Yf4xnfXZxvXRCEPPwAb9n");
		   })();
		</script>
    </div>
</div>