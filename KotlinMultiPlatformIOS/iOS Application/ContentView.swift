//
//  ContentView.swift
//  iOS Application
//
//  Created by Brady Holt on 12/4/19.
//  Copyright © 2019 Brady Holt. All rights reserved.
//

import SwiftUI
import kotlinMultiPlatform

struct ContentView: View {
    var body: some View {
        Text(ShowMessageKt.sayHelloKotlinConf())
            .font(.system(size: 40))
            .multilineTextAlignment(.center)
    }
}
