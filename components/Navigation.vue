<template>
  <v-navigation-drawer app permanent dark width="300" color="light-blue darken-1">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">しまの時刻表へようこそ！</v-list-item-title>
        <v-list-item-subtitle>時刻表を調べたい島を選択してください。</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-layout xs12 row justify-center>
      <v-btn text disabled>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

      <v-btn text disabled>
        <v-icon>mdi-clock</v-icon>
      </v-btn>

      <v-btn text disabled>
        <v-icon>mdi-panorama</v-icon>
      </v-btn>
    </v-layout>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item-content>
        <v-list-item-subtitle>{{island_name}}へ行く港</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item v-for="item in to_items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>mdi-ferry</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title style="font-size:16px;">{{ item.name }} ({{item.locale}})</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list dense nav>
      <v-list-item-content>
        <v-list-item-subtitle>{{island_name}}の港</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item v-for="item in from_items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>mdi-ferry</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title style="font-size:16px;">{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      island_name: "中島(松山市)",
      position: {
        lat: 33.975178,
        lng: 132.619553
      },
      from_items: [
        {
          locale: "中島",
          name: "大浦港",
          position: {
            lat: 33.973086,
            lng: 132.630419
          },
          to: [
            {
              locale: "松山市",
              name: "三津浜港",
              position: {
                lat: 33.865391,
                lng: 132.70953
              }
            },
            {
              locale: "松山市",
              name: "高浜港",
              position: {
                lat: 33.88383,
                lng: 132.701657
              }
            },
            {
              locale: "睦月島",
              name: "睦月港",
              position: {
                lat: 33.956763,
                lng: 132.665464
              }
            },
            {
              locale: "野忽那島",
              name: "野忽那港",
              position: {
                lat: 33.975564,
                lng: 132.688479
              }
            }
          ]
        },
        {
          locale: "中島",
          name: "神浦港",
          position: {
            lat: 33.949911,
            lng: 132.603949
          },
          to: [
            {
              locale: "松山市",
              name: "三津浜港",
              position: {
                lat: 33.865391,
                lng: 132.70953
              }
            },
            {
              locale: "松山市",
              name: "高浜港",
              position: {
                lat: 33.88383,
                lng: 132.701657
              }
            },
            {
              locale: "釣島",
              name: "釣島港",
              position: {
                lat: 33.89445,
                lng: 132.639757
              }
            },
            {
              locale: "二神島",
              name: "二神港",
              position: {
                lat: 33.933862,
                lng: 132.53734
              }
            },
            {
              locale: "津和地島",
              name: "津和地港",
              position: {
                lat: 33.983388,
                lng: 132.515905
              }
            },
            {
              locale: "怒和島",
              name: "上怒和港",
              position: {
                lat: 33.987807,
                lng: 132.557195
              }
            },
            {
              locale: "怒和島",
              name: "元怒和港",
              position: {
                lat: 33.97578,
                lng: 132.540842
              }
            }
          ]
        },
        {
          locale: "中島",
          name: "西中港",
          position: {
            lat: 33.984457,
            lng: 132.604718
          },
          to: [
            {
              locale: "二神島",
              name: "二神港",
              position: {
                lat: 33.933862,
                lng: 132.53734
              }
            },
            {
              locale: "津和地島",
              name: "津和地港",
              position: {
                lat: 33.983388,
                lng: 132.515905
              }
            },
            {
              locale: "怒和島",
              name: "上怒和港",
              position: {
                lat: 33.987807,
                lng: 132.557195
              }
            },
            {
              locale: "怒和島",
              name: "元怒和港",
              position: {
                lat: 33.97578,
                lng: 132.540842
              }
            }
          ]
        }
      ],
      to_items: [
        {
          locale: "松山市",
          name: "三津浜港",
          position: {
            lat: 33.865391,
            lng: 132.70953
          },
          to: [
            {
              locale: "中島",
              name: "大浦港",
              position: {
                lat: 33.973086,
                lng: 132.630419
              }
            },
            {
              locale: "中島",
              name: "神浦港",
              position: {
                lat: 33.949911,
                lng: 132.603949
              }
            }
          ]
        },
        {
          locale: "松山市",
          name: "高浜港",
          position: {
            lat: 33.88383,
            lng: 132.701657
          },
          to: [
            {
              locale: "中島",
              name: "大浦港",
              position: {
                lat: 33.973086,
                lng: 132.630419
              }
            },
            {
              locale: "中島",
              name: "神浦港",
              position: {
                lat: 33.949911,
                lng: 132.603949
              }
            }
          ]
        },
        {
          locale: "睦月島",
          name: "睦月港",
          position: {
            lat: 33.956763,
            lng: 132.665464
          },
          to: [
            {
              locale: "中島",
              name: "大浦港",
              position: {
                lat: 33.973086,
                lng: 132.630419
              }
            }
          ]
        },
        {
          locale: "野忽那島",
          name: "野忽那港",
          position: {
            lat: 33.975564,
            lng: 132.688479
          },
          to: [
            {
              locale: "中島",
              name: "大浦港",
              position: {
                lat: 33.973086,
                lng: 132.630419
              }
            }
          ]
        },
        {
          locale: "釣島",
          name: "釣島港",
          position: {
            lat: 33.89445,
            lng: 132.639757
          },
          to: [
            {
              locale: "中島",
              name: "神浦港",
              position: {
                lat: 33.949911,
                lng: 132.603949
              }
            }
          ]
        },
        {
          locale: "二神島",
          name: "二神港",
          position: {
            lat: 33.933862,
            lng: 132.53734
          },
          to: [
            {
              locale: "中島",
              name: "神浦港",
              position: {
                lat: 33.949911,
                lng: 132.603949
              }
            },
            {
              locale: "中島",
              name: "西中港",
              position: {
                lat: 33.984457,
                lng: 132.604718
              }
            }
          ]
        },
        {
          locale: "津和地島",
          name: "津和地港",
          position: {
            lat: 33.983388,
            lng: 132.515905
          },
          to: [
            {
              locale: "中島",
              name: "神浦港",
              position: {
                lat: 33.949911,
                lng: 132.603949
              }
            },
            {
              locale: "中島",
              name: "西中港",
              position: {
                lat: 33.984457,
                lng: 132.604718
              }
            }
          ]
        },
        {
          locale: "怒和島",
          name: "上怒和港",
          position: {
            lat: 33.987807,
            lng: 132.557195
          },
          to: [
            {
              locale: "中島",
              name: "神浦港",
              position: {
                lat: 33.949911,
                lng: 132.603949
              }
            },
            {
              locale: "中島",
              name: "西中港",
              position: {
                lat: 33.984457,
                lng: 132.604718
              }
            }
          ]
        },
        {
          locale: "怒和島",
          name: "元怒和港",
          position: {
            lat: 33.97578,
            lng: 132.540842
          },
          to: [
            {
              locale: "中島",
              name: "神浦港",
              position: {
                lat: 33.949911,
                lng: 132.603949
              }
            },
            {
              locale: "中島",
              name: "西中港",
              position: {
                lat: 33.984457,
                lng: 132.604718
              }
            }
          ]
        }
      ],
      right: null
    };
  }
};
</script>