/* Include the CSS from the provided header */
$headerHeight: 300px;
$toolbarHeight: 64px;

* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  line-height: 1.4;
}

html, body {
  height: 100%;
  min-height: 100%;
  font-family: Roboto, sans-serif;
}

main {
  padding-top: $headerHeight;
  font-family: Arial, sans-serif;
  background: #eee;
  min-height: 100%;
}

.app-header {
  display: block;
  background: #3f51b5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  height: $headerHeight;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0);
}

.background-container {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.background {
  pointer-events: none;
  position: absolute;
  background-size: cover;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  will-change: transform, opacity;
}

#background-back {
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/mountain-02.jpg');
  background-position: left center;
  opacity: 0;
}

#background-front {
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/mountain-01.jpg');
  background-position: left center;
}

#landing-content .card {
  padding: 16px;
  margin: 24px;
  border-radius: 4px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 5px rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
}

footer {
  text-align: center;
  padding: 16px;
  background-color: #3f51b5;
  color: #fff;
}
