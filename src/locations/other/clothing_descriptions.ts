// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).description = '';
  if (((s as any).CloDress ?? 0) === 1) {
    if (((s as any).CloQuality ?? 0) === 1) {
      (s as any).description = 'This crappy quality dress';
    } else {
      if (((s as any).CloQuality ?? 0) === 2) {
        (s as any).description = 'This very low quality dress';
      } else {
        if (((s as any).CloQuality ?? 0) === 3) {
          (s as any).description = 'This low quality dress';
        } else {
          if (((s as any).CloQuality ?? 0) === 4) {
            (s as any).description = 'This average quality dress';
          } else {
            if (((s as any).CloQuality ?? 0) === 5) {
              (s as any).description = 'This reasonable quality dress';
            } else {
              if (((s as any).CloQuality ?? 0) === 6) {
                (s as any).description = 'This good quality dress';
              } else {
                if (((s as any).CloQuality ?? 0) === 7) {
                  (s as any).description = 'This is an outstanding quality dress';
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).CloQuality ?? 0) === 1) {
      (s as any).description = 'This crappy quality outfit';
    } else {
      if (((s as any).CloQuality ?? 0) === 2) {
        (s as any).description = 'This very low quality outfit';
      } else {
        if (((s as any).CloQuality ?? 0) === 3) {
          (s as any).description = 'This low quality outfit';
        } else {
          if (((s as any).CloQuality ?? 0) === 4) {
            (s as any).description = 'This average quality outfit';
          } else {
            if (((s as any).CloQuality ?? 0) === 5) {
              (s as any).description = 'This reasonable quality outfit';
            } else {
              if (((s as any).CloQuality ?? 0) === 6) {
                (s as any).description = 'This good quality outfit';
              } else {
                if (((s as any).CloQuality ?? 0) === 7) {
                  (s as any).description = 'This is an outstanding quality outfit';
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).CloThinness ?? 0) === 1) {
    (s as any).description = ((s as any).description ?? 0) + (', which obscures your figure');
  } else {
    if (((s as any).CloThinness ?? 0) === 2) {
      (s as any).description = ((s as any).description ?? 0) + (', which somewhat obscures your figure');
    } else {
      if (((s as any).CloThinness ?? 0) === 3) {
        (s as any).description = ((s as any).description ?? 0) + (', which somewhat shows your figure');
      } else {
        if (((s as any).CloThinness ?? 0) === 4) {
          (s as any).description = ((s as any).description ?? 0) + (', which shows your figure well');
        } else {
          if (((s as any).CloThinness ?? 0) === 5) {
            (s as any).description = ((s as any).description ?? 0) + (', which shows every detail of your figure');
          } else {
            if (((s as any).CloThinness ?? 0) === 6) {
              (s as any).description = ((s as any).description ?? 0) + (', which intentionally reveals your intimate areas');
            }
          }
        }
      }
    }
  }
  if (((s as any).CloBra ?? 0) === 2) {
    (s as any).description = ((s as any).description ?? 0) + (', the top leaves your breasts completely exposed');
  } else {
    if (((s as any).CloBra ?? 0) === 1) {
      (s as any).description = ((s as any).description ?? 0) + (', the top is essentially a bra and replaces any you might be wearing');
    } else {
      if (((s as any).CloTopCut ?? 0) > 0) {
        if (((s as any).CloTopCut ?? 0) === 1) {
          (s as any).description = ((s as any).description ?? 0) + (', includes a modest cut top');
        } else {
          if (((s as any).CloTopCut ?? 0) === 2) {
            (s as any).description = ((s as any).description ?? 0) + (', includes a fairly regular cut top');
          } else {
            if (((s as any).CloTopCut ?? 0) === 3) {
              (s as any).description = ((s as any).description ?? 0) + (', includes a daring cut top');
            } else {
              if (((s as any).CloTopCut ?? 0) === 4) {
                (s as any).description = ((s as any).description ?? 0) + (', includes a very revealing cut top');
              }
            }
          }
        }
        if (((s as any).tits ?? 0) < 1  &&  ((s as any).CloTopCut ?? 0) === 1) {
          (s as any).description = ((s as any).description ?? 0) + (' that would fit well over your flat chest');
        } else {
          if (((s as any).tits ?? 0) < 1  &&  ((s as any).CloTopCut ?? 0) === 2) {
            (s as any).description = ((s as any).description ?? 0) + (' that would hang awkwardly around flat chest');
          } else {
            if (((s as any).tits ?? 0) < 1  &&  ((s as any).CloTopCut ?? 0) === 3) {
              (s as any).description = ((s as any).description ?? 0) + (' that would hang very awkwardly around flat chest');
            } else {
              if (((s as any).tits ?? 0) < 1  &&  ((s as any).CloTopCut ?? 0) === 4) {
                (s as any).description = ((s as any).description ?? 0) + (' that would hang extremely loosely over your flat chest');
              } else {
                if (((s as any).tits ?? 0) < 1) {
                  (s as any).description = ((s as any).description ?? 0) + (' that would hang loosely around your flat chest');
                } else {
                  if (((s as any).tits ?? 0) < 2  &&  ((s as any).CloTopCut ?? 0) === 1) {
                    (s as any).description = ((s as any).description ?? 0) + (' that would fit well over your tiny breasts');
                  } else {
                    if (((s as any).tits ?? 0) < 2  &&  ((s as any).CloTopCut ?? 0) === 2) {
                      (s as any).description = ((s as any).description ?? 0) + (' that would emphasize your lack of cleavage');
                    } else {
                      if (((s as any).tits ?? 0) < 2  &&  ((s as any).CloTopCut ?? 0) === 3) {
                        (s as any).description = ((s as any).description ?? 0) + (' that would hang loosely over your tiny breasts');
                      } else {
                        if (((s as any).tits ?? 0) < 2  &&  ((s as any).CloTopCut ?? 0) === 4) {
                          (s as any).description = ((s as any).description ?? 0) + (' that would drape breezily over your tiny breasts');
                        } else {
                          if (((s as any).tits ?? 0) < 2) {
                            (s as any).description = ((s as any).description ?? 0) + (' that would hang loosely around your tiny breasts');
                          } else {
                            if (((s as any).tits ?? 0) < 3  &&  ((s as any).CloTopCut ?? 0) === 1) {
                              (s as any).description = ((s as any).description ?? 0) + (' that would fit well over your petite breasts');
                            } else {
                              if (((s as any).tits ?? 0) < 3  &&  ((s as any).CloTopCut ?? 0) === 2) {
                                (s as any).description = ((s as any).description ?? 0) + (' that would slightly emphasize your petite breasts');
                              } else {
                                if (((s as any).tits ?? 0) < 3  &&  ((s as any).CloTopCut ?? 0) === 3) {
                                  (s as any).description = ((s as any).description ?? 0) + (' that would emphasize your petite breasts');
                                } else {
                                  if (((s as any).tits ?? 0) < 3  &&  ((s as any).CloTopCut ?? 0) === 4) {
                                    (s as any).description = ((s as any).description ?? 0) + (' that would greatly emphasize your petite breasts');
                                  } else {
                                    if (((s as any).tits ?? 0) < 3) {
                                      (s as any).description = ((s as any).description ?? 0) + (' that would hang loosely over your petite breasts');
                                    } else {
                                      if (((s as any).tits ?? 0) < 4  &&  ((s as any).CloTopCut ?? 0) === 1) {
                                        (s as any).description = ((s as any).description ?? 0) + (' that would fit well around your shapely breasts');
                                      } else {
                                        if (((s as any).tits ?? 0) < 4  &&  ((s as any).CloTopCut ?? 0) === 2) {
                                          (s as any).description = ((s as any).description ?? 0) + (' that would help emphasize your shapely breasts');
                                        } else {
                                          if (((s as any).tits ?? 0) < 4  &&  ((s as any).CloTopCut ?? 0) === 3) {
                                            (s as any).description = ((s as any).description ?? 0) + (' that would show off your shapely breasts');
                                          } else {
                                            if (((s as any).tits ?? 0) < 4  &&  ((s as any).CloTopCut ?? 0) === 4) {
                                              (s as any).description = ((s as any).description ?? 0) + (' that would really show off your shapely breasts');
                                            } else {
                                              if (((s as any).tits ?? 0) < 4) {
                                                (s as any).description = ((s as any).description ?? 0) + (' that would fit well around your shapely breasts');
                                              } else {
                                                if (((s as any).tits ?? 0) < 6  &&  ((s as any).CloTopCut ?? 0) === 1) {
                                                  (s as any).description = ((s as any).description ?? 0) + (' that would comfortably wrap around your large breasts');
                                                } else {
                                                  if (((s as any).tits ?? 0) < 6  &&  ((s as any).CloTopCut ?? 0) === 2) {
                                                    (s as any).description = ((s as any).description ?? 0) + (' that would help emphasize your large breasts');
                                                  } else {
                                                    if (((s as any).tits ?? 0) < 6  &&  ((s as any).CloTopCut ?? 0) === 3) {
                                                      (s as any).description = ((s as any).description ?? 0) + (' that would show off your large breasts');
                                                    } else {
                                                      if (((s as any).tits ?? 0) < 6  &&  ((s as any).CloTopCut ?? 0) === 4) {
                                                        (s as any).description = ((s as any).description ?? 0) + (' that would attract a lot of attention to your large breasts');
                                                      } else {
                                                        if (((s as any).tits ?? 0) < 6) {
                                                          (s as any).description = ((s as any).description ?? 0) + (' that would comfortably wrap around your large breasts');
                                                        } else {
                                                          if (((s as any).tits ?? 0) < 8  &&  ((s as any).CloTopCut ?? 0) === 1) {
                                                            (s as any).description = ((s as any).description ?? 0) + (' that your ample bosom would strain against');
                                                          } else {
                                                            if (((s as any).tits ?? 0) < 8  &&  ((s as any).CloTopCut ?? 0) === 2) {
                                                              (s as any).description = ((s as any).description ?? 0) + (' that would emphasize the cleavage of your ample bosom');
                                                            } else {
                                                              if (((s as any).tits ?? 0) < 8  &&  ((s as any).CloTopCut ?? 0) === 3) {
                                                                (s as any).description = ((s as any).description ?? 0) + (' that would emphasize the size your exceptionally large breasts');
                                                              } else {
                                                                if (((s as any).tits ?? 0) < 8  &&  ((s as any).CloTopCut ?? 0) === 4) {
                                                                  (s as any).description = ((s as any).description ?? 0) + (' that would draw everyone\'s eyes to your exceptionally large breasts');
                                                                } else {
                                                                  if (((s as any).tits ?? 0) < 8) {
                                                                    (s as any).description = ((s as any).description ?? 0) + (' that would tightly strain to contain your ample bosom');
                                                                  } else {
                                                                    if (((s as any).CloTopCut ?? 0) === 1) {
                                                                      (s as any).description = ((s as any).description ?? 0) + (' that would struggle to contain your huge breasts');
                                                                    } else {
                                                                      if (((s as any).CloTopCut ?? 0) === 2) {
                                                                        (s as any).description = ((s as any).description ?? 0) + (' that would emphasize your enormous cleavage');
                                                                      } else {
                                                                        if (((s as any).CloTopCut ?? 0) === 3) {
                                                                          (s as any).description = ((s as any).description ?? 0) + (' that your huge breasts would spill out of');
                                                                        } else {
                                                                          if (((s as any).CloTopCut ?? 0) === 4) {
                                                                            (s as any).description = ((s as any).description ?? 0) + (' that might fail to contain your huge breasts');
                                                                          } else {
                                                                            (s as any).description = ((s as any).description ?? 0) + (' that would struggle to contain your huge breasts');
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).CloDress ?? 0) === 1) {
    if (((s as any).CloSkirtShortness ?? 0) === 1) {
      (s as any).description = ((s as any).description ?? 0) + (' and a floor-length hemline.');
    } else {
      if (((s as any).CloSkirtShortness ?? 0) === 2) {
        (s as any).description = ((s as any).description ?? 0) + (' and a knee-length hemline.');
      } else {
        if (((s as any).CloSkirtShortness ?? 0) === 3) {
          (s as any).description = ((s as any).description ?? 0) + (' and a fairly standard hemline.');
        } else {
          if (((s as any).CloSkirtShortness ?? 0) === 4) {
            (s as any).description = ((s as any).description ?? 0) + (' and a rather short hemline.');
          } else {
            if (((s as any).CloSkirtShortness ?? 0) === 5) {
              (s as any).description = ((s as any).description ?? 0) + (' and a hemline that barely reaches past your groin.');
            } else {
              if (((s as any).CloSkirtShortness ?? 0) === 6) {
                (s as any).description = ((s as any).description ?? 0) + (' and a hemline not even long enough to hide your privates.');
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).CloPanties ?? 0) === 1) {
      (s as any).description = ((s as any).description ?? 0) + (' the bottom of which is so skimpy it replaces your panties.');
    } else {
      if (((s as any).CloPantsShortness ?? 0) > 0) {
        if (((s as any).CloPantsShortness ?? 0) === 1) {
          (s as any).description = ((s as any).description ?? 0) + (' and long pants.');
        } else {
          if (((s as any).CloPantsShortness ?? 0) === 2) {
            (s as any).description = ((s as any).description ?? 0) + (' and calf-length pants.');
          } else {
            if (((s as any).CloPantsShortness ?? 0) === 3) {
              (s as any).description = ((s as any).description ?? 0) + (' and knee-length shorts.');
            } else {
              if (((s as any).CloPantsShortness ?? 0) === 4) {
                (s as any).description = ((s as any).description ?? 0) + (' and thigh-length shorts.');
              } else {
                if (((s as any).CloPantsShortness ?? 0) === 5) {
                  (s as any).description = ((s as any).description ?? 0) + (' and shorts that don\'t go past your crotch.');
                } else {
                  if (((s as any).CloPantsShortness ?? 0) === 6) {
                    (s as any).description = ((s as any).description ?? 0) + (' and shorts so short, that they reveal your panties.');
                  }
                }
              }
            }
          }
        }
      } else {
        if (((s as any).CloSkirtShortness ?? 0) > 0) {
          if (((s as any).CloSkirtShortness ?? 0) === 1) {
            (s as any).description = ((s as any).description ?? 0) + (' and a floor-length skirt.');
          } else {
            if (((s as any).CloSkirtShortness ?? 0) === 2) {
              (s as any).description = ((s as any).description ?? 0) + (' and a knee-length skirt.');
            } else {
              if (((s as any).CloSkirtShortness ?? 0) === 3) {
                (s as any).description = ((s as any).description ?? 0) + (' and an above knee length skirt.');
              } else {
                if (((s as any).CloSkirtShortness ?? 0) === 4) {
                  (s as any).description = ((s as any).description ?? 0) + (' and a rather short skirt.');
                } else {
                  if (((s as any).CloSkirtShortness ?? 0) === 5) {
                    (s as any).description = ((s as any).description ?? 0) + (' and a miniskirt that barely reaches past your groin.');
                  } else {
                    if (((s as any).CloSkirtShortness ?? 0) === 6) {
                      (s as any).description = ((s as any).description ?? 0) + (' and a microskirt not even long enough to hide your privates.');
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).CloBra ?? 0) !== 2) {
    if (((s as any).CloCoverTop ?? 0) === 1) {
      (s as any).description = ((s as any).description ?? 0) + (' If worn without a bra your breasts can just about be seen in the right light.');
    } else {
      if (((s as any).CloCoverTop ?? 0) === 2) {
        (s as any).description = ((s as any).description ?? 0) + (' If worn without a bra your breasts are partly visible.');
      } else {
        if (((s as any).CloCoverTop ?? 0) === 3) {
          (s as any).description = ((s as any).description ?? 0) + (' If worn without a bra your breasts are easily visible.');
        } else {
          if (((s as any).CloCoverTop ?? 0) === 4) {
            (s as any).description = ((s as any).description ?? 0) + (' If worn without a bra your breasts are not covered at all.');
          }
        }
      }
    }
  }
  if (((s as any).CloCoverFront ?? 0) === 1) {
    if (((s as any).CloCoverBack ?? 0) === 1) {
      (s as any).description = ((s as any).description ?? 0) + (' If worn without underwear your pussy and butt can just about be seen in the right light.');
    } else {
      if (((s as any).CloCoverBack ?? 0) === 2) {
        (s as any).description = ((s as any).description ?? 0) + (' If worn without underwear your pussy can just about be seen in the right light and your butt is partly visible.');
      } else {
        if (((s as any).CloCoverBack ?? 0) === 3) {
          (s as any).description = ((s as any).description ?? 0) + (' If worn without underwear your pussy can just about be seen in the right light and your butt is clearly visible.');
        } else {
          if (((s as any).CloCoverBack ?? 0) === 4) {
            (s as any).description = ((s as any).description ?? 0) + (' If worn without underwear your pussy can just about be seen in the right light and your butt is not covered at all.');
          }
        }
      }
    }
  } else {
    if (((s as any).CloCoverFront ?? 0) === 2) {
      if (((s as any).CloCoverBack ?? 0) === 1) {
        (s as any).description = ((s as any).description ?? 0) + (' If worn without underwear your pussy is partly visible and your butt can just about be seen in the right light.');
      } else {
        if (((s as any).CloCoverBack ?? 0) === 2) {
          (s as any).description = ((s as any).description ?? 0) + (' If worn without underwear your pussy and butt are partly visible.');
        } else {
          if (((s as any).CloCoverBack ?? 0) === 3) {
            (s as any).description = ((s as any).description ?? 0) + (' If worn without underwear your pussy is partly visible and your butt is clearly visible.');
          } else {
            if (((s as any).CloCoverBack ?? 0) === 4) {
              (s as any).description = ((s as any).description ?? 0) + (' If worn without underwear your pussy is partly visible and your butt is not covered at all.');
            }
          }
        }
      }
    } else {
      if (((s as any).CloCoverFront ?? 0) === 3) {
        if (((s as any).CloCoverBack ?? 0) === 1) {
          (s as any).description = ((s as any).description ?? 0) + (' If worn without underwear your pussy is clearly visible and your butt can just about be seen in the right light.');
        } else {
          if (((s as any).CloCoverBack ?? 0) === 2) {
            (s as any).description = ((s as any).description ?? 0) + (' If worn without underwear your pussy is clearly visible and your butt is partly visible.');
          } else {
            if (((s as any).CloCoverBack ?? 0) === 3) {
              (s as any).description = ((s as any).description ?? 0) + (' If worn without underwear your pussy and your butt are clearly visible.');
            } else {
              if (((s as any).CloCoverBack ?? 0) === 4) {
                (s as any).description = ((s as any).description ?? 0) + (' If worn without underwear your pussy is clearly visible and your butt is not covered at all.');
              }
            }
          }
        }
      } else {
        if (((s as any).CloCoverFront ?? 0) === 4) {
          if (((s as any).CloCoverBack ?? 0) === 1) {
            (s as any).description = ((s as any).description ?? 0) + (' If worn without underwear your pussy is not covered at all and your butt can just about be seen in the right light.');
          } else {
            if (((s as any).CloCoverBack ?? 0) === 2) {
              (s as any).description = ((s as any).description ?? 0) + (' If worn without underwear your pussy is not covered at all and your butt is partly visible.');
            } else {
              if (((s as any).CloCoverBack ?? 0) === 3) {
                (s as any).description = ((s as any).description ?? 0) + (' If worn without underwear your pussy is not covered at all and your butt is clearly visible.');
              } else {
                if (((s as any).CloCoverBack ?? 0) === 4) {
                  (s as any).description = ((s as any).description ?? 0) + (' If worn without underwear you pussy and your butt are not covered at all.');
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const clothing_descriptions: LocationDef = {
  name: 'clothing_descriptions',
  region: 'other',
  enter: enter,
};
