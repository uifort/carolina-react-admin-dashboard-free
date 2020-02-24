import React, { Fragment } from 'react';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { Grid, Card, CardContent } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <small>Scrollable</small>
                <b>Large Area</b>
              </div>
            </div>
            <CardContent className="p-3">
              <PerfectScrollbar className="scroll-area-lg shadow-overflow">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum sodales ullamcorper vehicula. Duis placerat quam
                  porta lorem lobortis, sit amet sodales mauris finibus. Donec
                  posuere diam at volutpat viverra. Cras fringilla auctor augue
                  sed congue. Maecenas mollis quis enim quis egestas. In
                  sollicitudin mi a pretium varius. Integer eleifend sodales
                  pharetra. Nullam vitae libero sem. Nulla et eros congue,
                  tincidunt ante eu, tincidunt eros. Donec nisl purus, convallis
                  a hendrerit ut, eleifend in lectus. Proin luctus dignissim
                  lacus, in laoreet arcu eleifend non. Quisque viverra ipsum a
                  massa porta convallis. Donec tincidunt imperdiet purus,
                  interdum elementum ante commodo a. Quisque pharetra arcu
                  sapien, vel ornare magna sollicitudin quis.
                </p>
                <p>
                  Nunc congue magna eget eros blandit, eu viverra magna semper.
                  Nullam in diam a metus dictum consequat. Quisque ultricies,
                  ipsum non euismod semper, velit felis lacinia nibh, et finibus
                  quam leo vitae nisi. Maecenas interdum diam quis risus
                  bibendum, eu fermentum est pharetra. In dictum at enim pretium
                  bibendum. Praesent efficitur iaculis dolor in sodales. Morbi
                  maximus in ipsum in malesuada. Proin semper lacus tempor magna
                  aliquam, sed aliquam dui scelerisque. Donec nisi nulla,
                  rhoncus a tristique eget, ultrices vitae dolor. Ut id urna
                  vitae ante tincidunt pharetra at non metus. Nunc in suscipit
                  nulla. Sed vitae leo vulputate, euismod tortor vel, aliquet
                  velit. Curabitur eget tincidunt elit. Nam et ligula finibus,
                  eleifend velit et, commodo quam. Praesent non libero velit.
                </p>
                <p>
                  Nunc congue magna eget eros blandit, eu viverra magna semper.
                  Nullam in diam a metus dictum consequat. Quisque ultricies,
                  ipsum non euismod semper, velit felis lacinia nibh, et finibus
                  quam leo vitae nisi. Maecenas interdum diam quis risus
                  bibendum, eu fermentum est pharetra. In dictum at enim pretium
                  bibendum. Praesent efficitur iaculis dolor in sodales. Morbi
                  maximus in ipsum in malesuada. Proin semper lacus tempor magna
                  aliquam, sed aliquam dui scelerisque. Donec nisi nulla,
                  rhoncus a tristique eget, ultrices vitae dolor. Ut id urna
                  vitae ante tincidunt pharetra at non metus. Nunc in suscipit
                  nulla. Sed vitae leo vulputate, euismod tortor vel, aliquet
                  velit. Curabitur eget tincidunt elit. Nam et ligula finibus,
                  eleifend velit et, commodo quam. Praesent non libero velit.
                </p>
                <p>
                  Nunc congue magna eget eros blandit, eu viverra magna semper.
                  Nullam in diam a metus dictum consequat. Quisque ultricies,
                  ipsum non euismod semper, velit felis lacinia nibh, et finibus
                  quam leo vitae nisi. Maecenas interdum diam quis risus
                  bibendum, eu fermentum est pharetra. In dictum at enim pretium
                  bibendum. Praesent efficitur iaculis dolor in sodales. Morbi
                  maximus in ipsum in malesuada. Proin semper lacus tempor magna
                  aliquam, sed aliquam dui scelerisque. Donec nisi nulla,
                  rhoncus a tristique eget, ultrices vitae dolor. Ut id urna
                  vitae ante tincidunt pharetra at non metus. Nunc in suscipit
                  nulla. Sed vitae leo vulputate, euismod tortor vel, aliquet
                  velit. Curabitur eget tincidunt elit. Nam et ligula finibus,
                  eleifend velit et, commodo quam. Praesent non libero velit.
                </p>
              </PerfectScrollbar>
            </CardContent>
          </Card>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <small>Scrollable</small>
                <b>Smallest Area</b>
              </div>
            </div>
            <CardContent className="p-3">
              <div className="scroll-area-xs shadow-overflow">
                <PerfectScrollbar>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum sodales ullamcorper vehicula. Duis placerat quam
                    porta lorem lobortis, sit amet sodales mauris finibus. Donec
                    posuere diam at volutpat viverra. Cras fringilla auctor
                    augue sed congue. Maecenas mollis quis enim quis egestas. In
                    sollicitudin mi a pretium varius. Integer eleifend sodales
                    pharetra. Nullam vitae libero sem. Nulla et eros congue,
                    tincidunt ante eu, tincidunt eros. Donec nisl purus,
                    convallis a hendrerit ut, eleifend in lectus. Proin luctus
                    dignissim lacus, in laoreet arcu eleifend non. Quisque
                    viverra ipsum a massa porta convallis. Donec tincidunt
                    imperdiet purus, interdum elementum ante commodo a. Quisque
                    pharetra arcu sapien, vel ornare magna sollicitudin quis.
                  </p>
                  <p>
                    Nunc congue magna eget eros blandit, eu viverra magna
                    semper. Nullam in diam a metus dictum consequat. Quisque
                    ultricies, ipsum non euismod semper, velit felis lacinia
                    nibh, et finibus quam leo vitae nisi. Maecenas interdum diam
                    quis risus bibendum, eu fermentum est pharetra. In dictum at
                    enim pretium bibendum. Praesent efficitur iaculis dolor in
                    sodales. Morbi maximus in ipsum in malesuada. Proin semper
                    lacus tempor magna aliquam, sed aliquam dui scelerisque.
                    Donec nisi nulla, rhoncus a tristique eget, ultrices vitae
                    dolor. Ut id urna vitae ante tincidunt pharetra at non
                    metus. Nunc in suscipit nulla. Sed vitae leo vulputate,
                    euismod tortor vel, aliquet velit. Curabitur eget tincidunt
                    elit. Nam et ligula finibus, eleifend velit et, commodo
                    quam. Praesent non libero velit.
                  </p>
                  <p>
                    Nunc congue magna eget eros blandit, eu viverra magna
                    semper. Nullam in diam a metus dictum consequat. Quisque
                    ultricies, ipsum non euismod semper, velit felis lacinia
                    nibh, et finibus quam leo vitae nisi. Maecenas interdum diam
                    quis risus bibendum, eu fermentum est pharetra. In dictum at
                    enim pretium bibendum. Praesent efficitur iaculis dolor in
                    sodales. Morbi maximus in ipsum in malesuada. Proin semper
                    lacus tempor magna aliquam, sed aliquam dui scelerisque.
                    Donec nisi nulla, rhoncus a tristique eget, ultrices vitae
                    dolor. Ut id urna vitae ante tincidunt pharetra at non
                    metus. Nunc in suscipit nulla. Sed vitae leo vulputate,
                    euismod tortor vel, aliquet velit. Curabitur eget tincidunt
                    elit. Nam et ligula finibus, eleifend velit et, commodo
                    quam. Praesent non libero velit.
                  </p>
                  <p>
                    Nunc congue magna eget eros blandit, eu viverra magna
                    semper. Nullam in diam a metus dictum consequat. Quisque
                    ultricies, ipsum non euismod semper, velit felis lacinia
                    nibh, et finibus quam leo vitae nisi. Maecenas interdum diam
                    quis risus bibendum, eu fermentum est pharetra. In dictum at
                    enim pretium bibendum. Praesent efficitur iaculis dolor in
                    sodales. Morbi maximus in ipsum in malesuada. Proin semper
                    lacus tempor magna aliquam, sed aliquam dui scelerisque.
                    Donec nisi nulla, rhoncus a tristique eget, ultrices vitae
                    dolor. Ut id urna vitae ante tincidunt pharetra at non
                    metus. Nunc in suscipit nulla. Sed vitae leo vulputate,
                    euismod tortor vel, aliquet velit. Curabitur eget tincidunt
                    elit. Nam et ligula finibus, eleifend velit et, commodo
                    quam. Praesent non libero velit.
                  </p>
                </PerfectScrollbar>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <small>Scrollable</small>
                <b>Medium Area</b>
              </div>
            </div>
            <CardContent className="p-3">
              <div className="scroll-area shadow-overflow">
                <PerfectScrollbar>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum sodales ullamcorper vehicula. Duis placerat quam
                    porta lorem lobortis, sit amet sodales mauris finibus. Donec
                    posuere diam at volutpat viverra. Cras fringilla auctor
                    augue sed congue. Maecenas mollis quis enim quis egestas. In
                    sollicitudin mi a pretium varius. Integer eleifend sodales
                    pharetra. Nullam vitae libero sem. Nulla et eros congue,
                    tincidunt ante eu, tincidunt eros. Donec nisl purus,
                    convallis a hendrerit ut, eleifend in lectus. Proin luctus
                    dignissim lacus, in laoreet arcu eleifend non. Quisque
                    viverra ipsum a massa porta convallis. Donec tincidunt
                    imperdiet purus, interdum elementum ante commodo a. Quisque
                    pharetra arcu sapien, vel ornare magna sollicitudin quis.
                  </p>
                  <p>
                    Nunc congue magna eget eros blandit, eu viverra magna
                    semper. Nullam in diam a metus dictum consequat. Quisque
                    ultricies, ipsum non euismod semper, velit felis lacinia
                    nibh, et finibus quam leo vitae nisi. Maecenas interdum diam
                    quis risus bibendum, eu fermentum est pharetra. In dictum at
                    enim pretium bibendum. Praesent efficitur iaculis dolor in
                    sodales. Morbi maximus in ipsum in malesuada. Proin semper
                    lacus tempor magna aliquam, sed aliquam dui scelerisque.
                    Donec nisi nulla, rhoncus a tristique eget, ultrices vitae
                    dolor. Ut id urna vitae ante tincidunt pharetra at non
                    metus. Nunc in suscipit nulla. Sed vitae leo vulputate,
                    euismod tortor vel, aliquet velit. Curabitur eget tincidunt
                    elit. Nam et ligula finibus, eleifend velit et, commodo
                    quam. Praesent non libero velit.
                  </p>
                  <p>
                    Nunc congue magna eget eros blandit, eu viverra magna
                    semper. Nullam in diam a metus dictum consequat. Quisque
                    ultricies, ipsum non euismod semper, velit felis lacinia
                    nibh, et finibus quam leo vitae nisi. Maecenas interdum diam
                    quis risus bibendum, eu fermentum est pharetra. In dictum at
                    enim pretium bibendum. Praesent efficitur iaculis dolor in
                    sodales. Morbi maximus in ipsum in malesuada. Proin semper
                    lacus tempor magna aliquam, sed aliquam dui scelerisque.
                    Donec nisi nulla, rhoncus a tristique eget, ultrices vitae
                    dolor. Ut id urna vitae ante tincidunt pharetra at non
                    metus. Nunc in suscipit nulla. Sed vitae leo vulputate,
                    euismod tortor vel, aliquet velit. Curabitur eget tincidunt
                    elit. Nam et ligula finibus, eleifend velit et, commodo
                    quam. Praesent non libero velit.
                  </p>
                  <p>
                    Nunc congue magna eget eros blandit, eu viverra magna
                    semper. Nullam in diam a metus dictum consequat. Quisque
                    ultricies, ipsum non euismod semper, velit felis lacinia
                    nibh, et finibus quam leo vitae nisi. Maecenas interdum diam
                    quis risus bibendum, eu fermentum est pharetra. In dictum at
                    enim pretium bibendum. Praesent efficitur iaculis dolor in
                    sodales. Morbi maximus in ipsum in malesuada. Proin semper
                    lacus tempor magna aliquam, sed aliquam dui scelerisque.
                    Donec nisi nulla, rhoncus a tristique eget, ultrices vitae
                    dolor. Ut id urna vitae ante tincidunt pharetra at non
                    metus. Nunc in suscipit nulla. Sed vitae leo vulputate,
                    euismod tortor vel, aliquet velit. Curabitur eget tincidunt
                    elit. Nam et ligula finibus, eleifend velit et, commodo
                    quam. Praesent non libero velit.
                  </p>
                </PerfectScrollbar>
              </div>
            </CardContent>
          </Card>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <small>Scrollable</small>
                <b>Small Area</b>
              </div>
            </div>
            <CardContent className="p-3">
              <div className="scroll-area-sm shadow-overflow">
                <PerfectScrollbar>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum sodales ullamcorper vehicula. Duis placerat quam
                    porta lorem lobortis, sit amet sodales mauris finibus. Donec
                    posuere diam at volutpat viverra. Cras fringilla auctor
                    augue sed congue. Maecenas mollis quis enim quis egestas. In
                    sollicitudin mi a pretium varius. Integer eleifend sodales
                    pharetra. Nullam vitae libero sem. Nulla et eros congue,
                    tincidunt ante eu, tincidunt eros. Donec nisl purus,
                    convallis a hendrerit ut, eleifend in lectus. Proin luctus
                    dignissim lacus, in laoreet arcu eleifend non. Quisque
                    viverra ipsum a massa porta convallis. Donec tincidunt
                    imperdiet purus, interdum elementum ante commodo a. Quisque
                    pharetra arcu sapien, vel ornare magna sollicitudin quis.
                  </p>
                  <p>
                    Nunc congue magna eget eros blandit, eu viverra magna
                    semper. Nullam in diam a metus dictum consequat. Quisque
                    ultricies, ipsum non euismod semper, velit felis lacinia
                    nibh, et finibus quam leo vitae nisi. Maecenas interdum diam
                    quis risus bibendum, eu fermentum est pharetra. In dictum at
                    enim pretium bibendum. Praesent efficitur iaculis dolor in
                    sodales. Morbi maximus in ipsum in malesuada. Proin semper
                    lacus tempor magna aliquam, sed aliquam dui scelerisque.
                    Donec nisi nulla, rhoncus a tristique eget, ultrices vitae
                    dolor. Ut id urna vitae ante tincidunt pharetra at non
                    metus. Nunc in suscipit nulla. Sed vitae leo vulputate,
                    euismod tortor vel, aliquet velit. Curabitur eget tincidunt
                    elit. Nam et ligula finibus, eleifend velit et, commodo
                    quam. Praesent non libero velit.
                  </p>
                  <p>
                    Nunc congue magna eget eros blandit, eu viverra magna
                    semper. Nullam in diam a metus dictum consequat. Quisque
                    ultricies, ipsum non euismod semper, velit felis lacinia
                    nibh, et finibus quam leo vitae nisi. Maecenas interdum diam
                    quis risus bibendum, eu fermentum est pharetra. In dictum at
                    enim pretium bibendum. Praesent efficitur iaculis dolor in
                    sodales. Morbi maximus in ipsum in malesuada. Proin semper
                    lacus tempor magna aliquam, sed aliquam dui scelerisque.
                    Donec nisi nulla, rhoncus a tristique eget, ultrices vitae
                    dolor. Ut id urna vitae ante tincidunt pharetra at non
                    metus. Nunc in suscipit nulla. Sed vitae leo vulputate,
                    euismod tortor vel, aliquet velit. Curabitur eget tincidunt
                    elit. Nam et ligula finibus, eleifend velit et, commodo
                    quam. Praesent non libero velit.
                  </p>
                  <p>
                    Nunc congue magna eget eros blandit, eu viverra magna
                    semper. Nullam in diam a metus dictum consequat. Quisque
                    ultricies, ipsum non euismod semper, velit felis lacinia
                    nibh, et finibus quam leo vitae nisi. Maecenas interdum diam
                    quis risus bibendum, eu fermentum est pharetra. In dictum at
                    enim pretium bibendum. Praesent efficitur iaculis dolor in
                    sodales. Morbi maximus in ipsum in malesuada. Proin semper
                    lacus tempor magna aliquam, sed aliquam dui scelerisque.
                    Donec nisi nulla, rhoncus a tristique eget, ultrices vitae
                    dolor. Ut id urna vitae ante tincidunt pharetra at non
                    metus. Nunc in suscipit nulla. Sed vitae leo vulputate,
                    euismod tortor vel, aliquet velit. Curabitur eget tincidunt
                    elit. Nam et ligula finibus, eleifend velit et, commodo
                    quam. Praesent non libero velit.
                  </p>
                </PerfectScrollbar>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
